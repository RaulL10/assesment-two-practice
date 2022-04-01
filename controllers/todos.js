
const Todo = require('../models/todo')

module.exports = {
    create,
    index,
    delete: deleteTodo
}

function create(req, res) {
    console.log(req.body)
    Todo.create(req.body)
    res.redirect('/')
}

function index(req, res) {
    res.render('index', {
        title: 'Todo list',
        todos: Todo.getAll()
    })
}
function deleteTodo(req, res) {
    console.log(req.params.id)
    Todo.deleteOne(req.params.id)
    
    res.redirect('/')
}