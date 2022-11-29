import mongoose from 'mongoose'
import { customAlphabet } from 'nanoid'
import nanoidDictionary from 'nanoid-dictionary'
import jwt from 'jsonwebtoken'

const { numbers } = nanoidDictionary
const { Schema } = mongoose

const userSchema = new Schema({
	email: {
		type: String,
		lowercase: true,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true,
		select: false
	},
	settings: {
		terms_and_conditions: {
			type: Boolean,
			default: false
		},
		is_email_validated: {
			type: Boolean,
			default: false
		},
		validation_email_token: String
	}
}, {
	timestamps: true
})

userSchema.method({
	generateEmailVerificationToken () {
		const token = customAlphabet(numbers, 6)()
		this.settings.validation_email_token = token
	},
	generateJWT() {
		const token = jwt.sign({ id: this._id}, process.env.JWT_SECRET, {
			issuer: process.env.APP_NAME,
			expiresIn: process.env.JWT_EXPIRES_IN
		})
		return token
	}
})

const User = mongoose.model('User', userSchema)

export default User