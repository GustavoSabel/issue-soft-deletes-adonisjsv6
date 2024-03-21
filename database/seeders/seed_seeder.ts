import Post from '#models/post'
import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await User.createMany([
      { email: 'user@someemail.com', password: '1234', fullName: 'Gustavo Sabel' },
    ])
    await Post.createMany([
      { title: 'First post', content: 'This is my first post' },
      { title: 'Second post', content: 'This is my second post' },
    ])
  }
}
