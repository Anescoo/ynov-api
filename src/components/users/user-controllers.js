import UserModel from '#components/users/user-model.js'
import Joi from 'joi'
import argon2 from 'argon2'
import { sendWelcomeEmail } from '#services/mailing/welcome-email.js'

export async function register (ctx) {
	try {
		const registerValidationSchema = Joi.object({
			email: Joi.string().email().required(),
			password: Joi.string().min(6).required(),
			terms_and_conditions: Joi.boolean().valid(true).required()
		})
		const params = ctx.request.body
		const { error, value } = registerValidationSchema.validate(params)
		if(error) throw new Error(error)
		const hashedPassword = await argon2.hash(value.password)
		const newUser = new UserModel ({
			...value,
			password: hashedPassword,
			settings: {
				terms_and_conditions: value.terms_and_conditions
			}
		})
		newUser.generateEmailVerificationToken()
		const user = await newUser.save()
		await sendWelcomeEmail(user, user.settings.validation_email_token)
		.then((r) => console.log(r))
            	.catch(e => console.log(e))
		const token = user.generateJWT()
		ctx.ok({token})
	} catch (e) {
		ctx.badRequest({ message: e.message})
	}
}

export async function login (ctx) {
	    try{

    } catch(err){
        ctx.badRequest({message: err.message})
    }
}
