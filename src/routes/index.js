import Router from '@koa/router'
import exemplesRoutes from '#components/exemples/exemple-routes.js'
import tasksRoutes from '#components/tasks/task-routes.js'
import listsRoutes from '#components/lists/list-routes.js'
import usersRoutes from '#components/users/user-routes.js'


const API_V1_ROUTER = new Router({ prefix: '/api/v1' })
API_V1_ROUTER.use('/exemples', exemplesRoutes.routes(), exemplesRoutes.allowedMethods())
export { API_V1_ROUTER }


const API_V2_ROUTER = new Router({ prefix: '/api/v2' })
API_V2_ROUTER.use('/tasks', tasksRoutes.routes(), tasksRoutes.allowedMethods())
export { API_V2_ROUTER }

const API_V3_ROUTER = new Router({ prefix: '/api/v3' })
API_V3_ROUTER.use('/lists', listsRoutes.routes(), listsRoutes.allowedMethods())
export { API_V3_ROUTER }

const API_V4_ROUTER = new Router({ prefix: '/api/v4' })
API_V4_ROUTER.use('/users', usersRoutes.routes(), usersRoutes.allowedMethods())
export { API_V4_ROUTER }