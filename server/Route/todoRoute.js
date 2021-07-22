const express = require('express');
const router = express.Router();


require('../DB/connection');
const Todo = require('../Schema/todoSchema');

router.post('/createTodo', async (req, res)=>{
    
    try {
        const {title, text} = req.body;
        // console.log(title);
        // console.log(text);
        const newTodo = new Todo({
            title, text
        });
        await newTodo.save();
        res.status(200).json({msg: "All ok"});
        
    } catch (err) {
        return res.status(500).json({msg: err.message});
    }
    
});


router.get('/getAllTodo', async(req, res)=>{
    try {
        Todo.find()
        .then((data)=>{
            return res.status(200).json({msg:"Success", data});
        })
        .catch((err)=>{
            return res.status(500).json({msg:"Failed"})
        })

    } catch (err) {
        return res.status(500).json({msg: err.message});
    }
});

router.patch('/updateTodo', async(req, res)=>{
    try {
        const {id, title, text} = req.body;
        const newData = {title, text};

        Todo.findByIdAndUpdate(id, newData).then((data)=>{
            return res.status(200).json({msg:"Success", data});
        }).catch((err)=>{
            return res.status(500).json({msg:"Failed", err});
        })


    } catch (err) {
        return res.status(500).json({msg: err.message});
    }
});

router.delete('/deleteTodo/:id', async(req, res)=>{
    try {
        const {id} = req.params;
    //    console.log(id);
        Todo.findByIdAndDelete(id)
            .then(()=>{
                return res.status(200).json({msg:"Success"});
            })
            .catch((err)=>{
                return res.status(500).json({msg:"Failed to delete"}, err)
            })
    } catch (err) {
        return res.status(500).json({msg: err.message});
    }
});



module.exports = router;