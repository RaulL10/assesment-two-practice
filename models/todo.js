const todos = [
    // {
    //     todo: 'playtime',
    //     id: 0
    // },
    // {
    //     todo: 'deploy website', 
    //     id: 1
    // }
]

module.exports = {
    getAll,
    create,
    deleteOne
}
function getAll() {
    return todos
}
function create(todo) {
    todo.id =  todos.length
    todos.push(todo)
    console.log(todos)
    }
function deleteOne(todo) {
    console.log(todo)
    todos.splice(Number(todo), 1)
}