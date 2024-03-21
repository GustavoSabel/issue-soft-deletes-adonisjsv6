const PostsController = () => import('#controllers/posts_controller')
import router from '@adonisjs/core/services/router'

router.on('/').redirect('/posts')

router.resource('posts', PostsController)
