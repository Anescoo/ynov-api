import Task from '#components/tasks/task-model.js';
import Joi from 'joi';

export async function allTasks (ctx) {
	try {
		ctx.body = await Task.find({})
	} catch (e){
		ctx.badRequest({ message: e.message })
	}
}

export async function taskId (ctx) {
	try {
		ctx.body = await Task.findById(ctx.params.taskId)
	} catch (e){
		ctx.badRequest({ message: e.message })
	}
}

export async function createTask (ctx) {
	try {
		const taskValidationSchema = Joi.object({
			taskName: Joi.string().required(),
			description: Joi.string(),
			userName: Joi.string().required(),
			importance: Joi.number().required(),
			done: Joi.boolean().default(false)
		})
		const { error } = taskValidationSchema.validate(ctx.request.body)
		if(error) throw new Error(error)

		await Task.create({taskId: ctx.params.taskId, taskName: ctx.request.body.taskName, description: ctx.request.body.description, userName: ctx.request.body.userName, importance: ctx.request.body.importance, done: ctx.request.body.done})
		ctx.body = "Ajout de la tâche effectué."
	} catch (e){
		ctx.badRequest({ message: e.message })
	}
}

export async function updateTask (ctx) {
	try {
		const taskValidationSchema = Joi.object({
			taskName: Joi.string().required(),
			description: Joi.string(),
			userName: Joi.string().required(),
			importance: Joi.number().required(),
			done: Joi.boolean().default(false)
		})
		const { error } = taskValidationSchema.validate(ctx.request.body)
		if(error) throw new Error(error)

		let taskObject = ctx.request.body
		await Task.findByIdAndUpdate(ctx.params.taskId, taskObject)
		ctx.body = "Modification de la tâche effectué."
		ctx.status = 200

	} catch (e){
		ctx.badRequest({ message: e.message })
	}
}

export async function deleteTask (ctx) {
	try {
		await Task.findByIdAndRemove(ctx.params.taskId)
		ctx.body = "Suppression de la tâche effectué."
		ctx.status = 200
	} catch (e){
		ctx.badRequest({ message: e.message })
	}
}
	