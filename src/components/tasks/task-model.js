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
	},
	done: {
		type: Boolean,
		default: false
	},
	list: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: 'List'
	}
}, {
	timestamps: true
})

const Task = mongoose.model('Task', taskSchema)

// const newTask = Task.create({ title: 'Task 1', list: 'id de la task'})

// Task.findById('id de la task').populate('list')
// .then(t => {
// 	console.log(t)
// })

// Task.find({ list: 'id de la task' }).populate('list').then(tasks => console.log(tasks))

export default Task