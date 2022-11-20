import mongoose from 'mongoose'

const { Schema } = mongoose

const taskSchema = new Schema({ 
	taskName: {
		type: String,
		required: true
	},
	description: {
		type: String,
	},
	userName: {
		type: String,
		required: true
	},
	importance: {
		type: Number,
		required: true
	}
})

const Task = mongoose.model('Task', taskSchema)

export default Task