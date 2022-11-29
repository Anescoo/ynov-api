import Router from '@koa/router'
import * as TaskControllers from '#components/tasks/task-controllers.js'
import { isAuthenticatedWithUser } from '#middlewares/jwt-handler.js'

const tasks = new Router

tasks.get('/', TaskControllers.allTasks)

tasks.get('/protected', isAuthenticatedWithUser, (ctx) => {
	// ctx.body = ctx.body.user.generateJWT()
	ctx.ok({
		message: 'The route is protected',
		user: ctx.state.user
	})
})


tasks.get('/:taskId', TaskControllers.taskId)
tasks.post('/', TaskControllers.createTask)
tasks.put('/:taskId', TaskControllers.updateTask)
tasks.delete('/:taskId', TaskControllers.deleteTask)

export default tasks