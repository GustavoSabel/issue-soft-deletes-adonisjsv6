import Post from '#models/post'
import type { HttpContext } from '@adonisjs/core/http'

export default class PostsController {
  async index({ view }: HttpContext) {
    return await view.render('pages/posts/index', { posts: await Post.all() })
  }

  async create({ view }: HttpContext) {
    return await view.render('pages/posts/create')
  }

  async store(ctx: HttpContext) {
    const data = ctx.request.only(['title', 'content'])
    await Post.create(data)
    ctx.response.redirect().toRoute('/posts')
  }

  async show({ view, params }: HttpContext) {
    return await view.render('pages/posts/show', { post: await Post.find(params.id) })
  }

  async edit() {
    throw new Error('Not implemented')
  }

  async update() {
    throw new Error('Not implemented')
  }

  async destroy(ctx: HttpContext) {
    const post = await Post.findOrFail(ctx.params.id)
    await post.delete()
    ctx.response.redirect().toRoute('/posts')
  }
}
