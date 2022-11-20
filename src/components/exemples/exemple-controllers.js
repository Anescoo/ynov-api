import '#components/exemples/exemple-model.js';
import Joi from 'joi';

export async function index (ctx) {
	try {
		ctx.body = await Example.find({})
	} catch (e){
		ctx.badRequest({ message: e.message })
	}
}

export async function create (ctx) {
	try {
		const exempleValidationSchema = Joi.object({
			name: Joi.string().min(4).max(20).required(),
			descriptino: Joi.string(),
			colors: Joi.array().has(Joi.string()),
			price: Joi.number().required(),
		})
		const { error } = exempleValidationSchema.validate(ctx.request.body)
		if(error) throw new Error(error)

		ctx.body = "Hello world"
	} catch (e){
		ctx.badRequest({ message: e.message })
	}
}