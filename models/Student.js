const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    name : String,
    currentMentor:{type:mongoose.Schema.Types.ObjectId , ref : 'Student'},
    previousMentor : [{type : mongoose.Schema.Types.ObjectId , ref: 'Student '}]
})

const Student = mongoose.model('Student' , studentSchema)