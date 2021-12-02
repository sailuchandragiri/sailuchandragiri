
const post = (model)=> async(req,res)=>{
    const item = await model.create(req.body)
    return res.status(201).send({item});
}

const get = (model) => async(req,res)=>{
    const items = await model.find().lean().exec()
    return res.status(200).send({items});
}

const patch = (model) => async(req, res)=>{
    const item = await model.findByIdAndUpdate(req.params.id, req.body, {new:true}).lean().exec()
    return res.status(200).send({item});
}

const getOne = (model) => async(req, res)=>{
    const item = await model.findById(req.params.id)
    return res.status(200).send({item});
}

const deleteOne = (model)=> async(req, res)=>{
    const item = await model.findByIdAndRemove(req.params.id)
    return res.status(200).send({item});
}

const newf = (model)=> async(req, res)=>{
    const items = await model.find().populate("_id").lean().exec()
    return res.status(200).send({items});
}

const parjobs = (model) => async(req, res) =>{
    const item = await model.findById(req.params.id).populate("job_id").lean().exec()
    return res.status(200).send({item});
} 

const sort = (model) => async(req, res) =>{
    const item = await model.find().sort({"id":-1}).lean().exec()
    return res.status(200).send({item});
}

const alldetails = (model) => async(req, res) =>{
    const item = await model.find().populate("job_id").populate("skill_id").lean().exec()
    return res.status(200).send({item});
}

module.exports={
    post, 
    get,
    patch,
    getOne,
    deleteOne,
    newf,
    parjobs,
    sort, 
    alldetails
}