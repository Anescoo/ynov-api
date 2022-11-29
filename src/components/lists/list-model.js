import mongoose from 'mongoose'

const { Schema } = mongoose

const taskSchema = new Schema({
    title: {
        type: String,
        required: true
    }
}, { _id: false})

const listSchema = new Schema({ 
    listName: {
        type: String,
        required: true
    },
    tasks: [taskSchema]
}, { 
    timestamps: true 
})

const List = mongoose.model('List', listSchema)

const newList = new List({ listName: 'Courses'})
const {_id} = newList.save()
console.log(newList)
// List.findById('')


export default List