const mongooose = require('mongoose');


const todoSchema = new mongooose.Schema({
    title: {
        type: String,
        required:true
    },
    text: {
         type: String,
        required:true
    }
},{
    timestamps: true //important
})

// collection creation 
const Todo = mongooose.model('TODO', todoSchema);

module.exports = Todo;
