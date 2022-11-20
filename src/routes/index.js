import Router from '@koa/router'
import exemplesRoutes from '#components/exemples/exemple-routes.js'
import tasksRoutes from '#components/tasks/task-routes.js'


const API_V1_ROUTER = new Router({ prefix: '/api/v1' })
API_V1_ROUTER.use('/exemples', exemplesRoutes.routes(), exemplesRoutes.allowedMethods())
export { API_V1_ROUTER }


const API_V2_ROUTER = new Router({ prefix: '/api/v2' })
API_V2_ROUTER.use('/tasks', tasksRoutes.routes(), tasksRoutes.allowedMethods())
export { API_V2_ROUTER }

