import List from '#components/lists/list-model.js';
import Joi from 'joi';

export async function allLists (ctx) {
	try {
		ctx.body = await List.find({})
	} catch (e){
		ctx.badRequest({ message: e.message })
	}
}

export async function listId (ctx) {
	try {
		ctx.body = await List.findById(ctx.params.listId)
	} catch (e){
		ctx.badRequest({ message: e.message })
	}
}

export async function createList (ctx) {
	try {
		const listValidationSchema = Joi.object({
			name: Joi.string().required(),
		})
		const { error } = listValidationSchema.validate(ctx.request.body)
		if(error) throw new Error(error)

		await List.create({listId: ctx.params.listId, name: ctx.request.body.name})
		ctx.body = "Ajout de la liste effectué."
	} catch (e){
		ctx.badRequest({ message: e.message })
	}
}

export async function updateList (ctx) {
	try {
		const listValidationSchema = Joi.object({
			name: Joi.string().required()
		})
		const { error } = listValidationSchema.validate(ctx.request.body)
		if(error) throw new Error(error)

		let listObject = ctx.request.body
		await List.findByIdAndUpdate(ctx.params.listId, listObject)
		ctx.body = "Modification de la liste effectué."
		ctx.status = 200

	} catch (e){
		ctx.badRequest({ message: e.message })
	}
}

export async function deleteList (ctx) {
	try {
		await List.findByIdAndRemove(ctx.params.listId)
		ctx.body = "Suppression de la liste effectué."
		ctx.status = 200
	} catch (e){
		ctx.badRequest({ message: e.message })
	}
}
