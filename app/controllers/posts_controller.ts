import Post from '#models/post'
import type { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'

export default class PostsController {
  async index({ view }: HttpContext) {
    return await view.render('pages/posts/index', { posts: await Post.all() })
  }

  async create({ view }: HttpContext) {
    return await view.render('pages/posts/create')
  }

  async store(ctx: HttpContext) {
    const data = ctx.request.only(['title', 'content'])
    const post = await db.transaction(async (trx) => {
      return await new Post().fill(data).useTransaction(trx).save()
    })
    ctx.response.redirect().toRoute('posts.show', { id: post.id })
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
