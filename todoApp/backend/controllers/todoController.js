const todoModels = require('../models/todoModels');
// const TodoModel = require('../models/todoModels');

module.exports.getToDo = async (req, res) => {
    const toDo = await todoModels.find()
    res.send(toDo)
}

module.exports.saveToDo = async (req, res) => {
     const { text } = req.body

     todoModels.create({text})
     .then((data) => {
        console.log("Added Successfully..");
        console.log("This is data",data);
        res.send(data)
     })
}

module.exports.updateToDo = async (req, res) => {
      const {_id, text} = req.body

      todoModels.findByIdAndUpdate(_id, {text})
      .then(() => res.send("Updated Successfully"))
      .catch((err) => console.log(err))
}

module.exports.deleteToDo = async (req, res) => {
    const {_id} = req.body

    todoModels.findByIdAndDelete(_id)
    .then(() => res.send("Deleted Successfully"))
    .catch((err) => console.log(err))
}