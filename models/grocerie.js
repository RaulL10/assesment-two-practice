const groceries = [
   
]

module.exports = {
    getAll,
    create,
    deleteOne,
    update
}
function getAll() {
    return groceries
}
function create(grocerie) {
    grocerie.id =  groceries.length
    groceries.push(grocerie)
    console.log(groceries)
    }
function deleteOne(grocerie) {
    console.log(grocerie)
    groceries.splice(Number(grocerie), 1)
}
function update(id, grocerie) {
    const idx = groceries.findIndex(grocerie => grocerie.id === parseInt(id))
    grocerie.id = parseInt(id)
    console.log(grocerie)
    groceries.splice(idx, 1, grocerie)
}