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

  async show() {
    throw new Error('Not implemented')
  }

  async edit() {
    throw new Error('Not implemented')
  }

  async update() {
    throw new Error('Not implemented')
  }

  async destroy() {
    throw new Error('Not implemented')
  }
}
