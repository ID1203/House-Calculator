const ExpenseSchema = require("../models/ExpenseModel")


exports.addExpense = async (req, res) => {//Method to add exspense
    const {title, amount, category, description, date}  = req.body//Destructures and takes all the values from the req body

    const income = ExpenseSchema({//creates new instance called insome using ExspenseSchema so it can be stored in the database
        title,
        amount,
        category,
        description,
        date
    })

    try {
        //validations
        if(!title || !category || !description || !date){
            return res.status(400).json({message: 'All fields are required!'})
        }
        if(amount <= 0 || !amount === 'number'){
            return res.status(400).json({message: 'Amount must be a positive number!'})
        }
        await income.save()
        res.status(200).json({message: 'Expense Added'})
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
     
    }

    console.log(income)
}

exports.getExpense = async (req, res) => {//Method to get exspense
    try {
        const incomes = await ExpenseSchema.find().sort({craetedAt: -1})//Finds all the exspense that fit the shcema and sorts them from oldest to newest created
        res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
}

exports.deleteExpense = async (req, res) => {
    const {id} = req.params;//Gets ID from request body
    ExpenseSchema.findByIdAndDelete(id)//Finds exspense by id then delete it 
        .then((income) => {
            res.status(200).json({mesage: 'Expense Deleted'})
        })
        .catch((err) => {
            res.status(500).json({message: 'Server Error'})
        })

}