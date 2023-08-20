const mongoose = require('mongoose');//Requires mongoose to vallidate that the datat entering the database matches the schema
//Models describe the different data structures that will be be stored in the data base

//Schemas are the structure the data should follow 
const ExpenseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    amount: {
        type: Number,
        required: true,
        maxLength: 20,
        trim: true
    },
    type: {
        type: String,
        default:"income"
    },
    date: {
        type: Date,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        maxLength: 20,
        trim: true
    },
}, {timestamps: true})

module.exports = mongoose.model('Expense', ExpenseSchema)
//Turns this from a assosiation to a actual model in the database Expense using the ExpenseSchema
//Then states which bits of code need to be exported and sccesed by other files