import mongoose from 'mongoose'

const { Schema } = mongoose

const exempleSchema = new Schema({ 
	name: {
		type: String,
		required: true
	},
	description: {
		type: String,
	},
	colors: {
		type: [String],
		required: true
	},
	price: {
		type: Number,
		required: true
	}
})

const Exemple = mongoose.model('Exemple', exempleSchema)

// Exemple.static({
// 	async findAll () {
// 	return Exemple.find({}).skip().limit()
// 	}
// })

Exemple.createIndexes({
	name: 'Test product',
	description: 'This is a test product',
	colors: ['red', 'blue', 'green'],
	price: 150
})

const updateById = async () => {
	const exemple = await Exemple.findByIdAndUpdate('5f9c1b9b9b9b9b9b9b9b9b9b', { name: 'New name' }, {runValidators: true})
	// console.log('UPDATE BY ID =========================', exemple._id)
	findAll()
}

const findAll = async () => {
	const exemples = await Exemple.find({ name: ""  }).select('description')
	// console.log('FIND ALL =============================', exemples)
}

const findByid = async () => {
	const exemple = await Exemple.findById('5f9c1b9b9b9b9b9b9b9b9b9b')
	// console.log('FIND BY ID ============================', exemple._id)
}

const deleteById = async () => {
	const exemple = await Exemple.findByIdAndDelete('5f9c1b9b9b9b9b9b9b9b9b9b')
	// console.log('DELETE BY ID =========================', exemple._id)
}

updateById()
findAll()
findByid()
deleteById()

export default Exemple