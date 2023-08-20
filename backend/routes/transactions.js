const { getExpense, addExpense, deleteExpense } = require('../controllers/expense');//Lets us access the methods from the exspense files
const { addIncome, getIncome, deleteIncome } = require('../controllers/income');//Lets us access the methods from the income files

const router = require('express').Router();//create a new router object(router checks for anything u need)

//Creates methods using restful api proccess
//Each route has the base url and the method of what to do with the data from the controller file 
router.post('/add-income', addIncome)
        .get('/get-income', getIncome)
        .delete('/delete-income/:id', deleteIncome)
        .post('/add-expenses', addExpense)
        .get('/get-expenses', getExpense)
        .delete('/delete-expenses/:id', deleteExpense)

module.exports = router//makes it into a module to be accessed from server and able to export it