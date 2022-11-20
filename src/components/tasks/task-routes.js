import Router from '@koa/router'
import * as TaskControllers from '#components/tasks/task-controllers.js'

const tasks = new Router

tasks.get('/', TaskControllers.allTasks)

tasks.get('/:taskId', TaskControllers.taskId)

tasks.post('/', TaskControllers.createTask)

tasks.put('/:taskId', TaskControllers.updateTask)

tasks.delete('/:taskId', TaskControllers.deleteTask)


export default tasks