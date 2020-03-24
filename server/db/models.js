const model = require('./index.js');

const searchString = str => model.find({ name: { "$regex": '^'+str, "$options": "i" } })
const getAllItems = () => model.find();

module.exports = {
    searchString,
    getAllItems
}