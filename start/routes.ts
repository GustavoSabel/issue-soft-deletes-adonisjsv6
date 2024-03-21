const PostsController = () => import('#controllers/posts_controller')
import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home')

router.resource('posts', PostsController)
