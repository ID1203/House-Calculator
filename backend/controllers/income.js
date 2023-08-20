const IncomeSchema= require("../models/IncomeModel")


exports.addIncome = async (req, res) => {//Method to add income
    const {title, amount, category, description, date}  = req.body//Destructures and takes all the values from the req body

    const income = IncomeSchema({//creates new instance called income using IncomeSchema so it can be stored in the database
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
        await income.save()//Save income instance to the database 
        res.status(200).json({message: 'Income Added'})
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
     
    }

    console.log(income)
}

exports.getIncome = async (req, res) => {//Method to get income
    try {
        const incomes = await IncomeSchema.find().sort({craetedAt: -1})//Finds all the incomes that fit the shcema and sorts them from oldest to newest created   
        res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
}

exports.deleteIncome = async (req, res) => {
    const {id} = req.params;//Gets ID from request body
    IncomeSchema.findByIdAndDelete(id)//Finds income by id then delete it  
        .then((income) => {
            res.status(200).json({mesage: 'Income Deleted'})
        })
        .catch((err) => {
            res.status(500).json({message: 'Server Error'})
        })

}