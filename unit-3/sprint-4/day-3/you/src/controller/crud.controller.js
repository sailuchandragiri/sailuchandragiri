const { response } = require("express");

const post = (model)=> async(req, res) =>{
    const item = await model.create(req.body)
    return res.status(201).send({item});
};

const get = (model) => async(req, res) =>{
    const items = await model.find().lean().exec()
    return res.status(200).send({items});
};


const patch = (model)=> async(req, res)=>{
    const item = await model.findByIdAndUpdate(req.params.id, req.body,{new: true}).lean().exec()
    return res.status(200).send({item});
};

const deleteOne = (model) => async(req, res)=>{
    const item = await model.findByIdAndRemove(req.params.id)
    return res.status(200).send({item});
};

const getOne = (model) => async(req, res)=>{
    const item = await model.findById(req.params.id)
    return res.status(200).send({item});
};

const getstudent = (model) =>async(req, res)=>{
    const items = await model.find().populate("user_id").populate("eval_id").lean().exec()
    return res.status(200).send({items});
}

module.exports  = {
    post,
    get,
    patch,
    deleteOne,
    getOne,
    getstudent
};