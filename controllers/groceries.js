
const Grocerie = require('../models/grocerie')

module.exports = {
    create,
    index,
    delete: deleteGrocerie,
    edit,
    update
}

function create(req, res) {
    console.log(req.body)
    Grocerie.create(req.body)
    res.redirect('/')
}

function index(req, res) {
    res.render('index', {
        title: 'Grocerie list',
        groceries: Grocerie.getAll()
    })
}
function deleteGrocerie(req, res) {
    console.log(req.params.id)
    Grocerie.deleteOne(req.params.id)
    
    res.redirect('/')
}
function edit(req, res) {
    res.render('/', {
        grocerie: Grocerie.getOne(req.params.id)
    })
}
function update(req, res) {
    console.log(req.body)
    console.log(req.params.id)
    Grocerie.update(req.params.id, req.body)
    res.redirect('/')
}