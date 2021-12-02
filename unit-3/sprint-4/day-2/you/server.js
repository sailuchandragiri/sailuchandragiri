const express = require("express");

const mongoose = require("mongoose");

const connect = ()=>{
    return mongoose.connect("mongodb://127.0.0.1:27017/library");
}



//step-1:- create the schema 

const userSchema = new mongoose.Schema({
    id: {type: Number, required:true},
    first_name: {type: String, required:true},
    last_name: {type: String, required:false},
    email: {type:String, required:true},
    gender: {type: String, required:true},
});

//step:-2 connect the schema with the users collection

const User = mongoose.model("user", userSchema);

// step:- create the section schema

const sectionSchema = new mongoose.Schema({
    food :{type:String, required:true},
    technology: {type:String, required:true},
    sports:{type:String, required:true},
    medicine: {type:String, required:true},
    books: [{type: mongoose.Schema.Types.ObjectId, ref:"book", required:true }]
},{
    versionKey:false,
    timestamps:true
});

//step:-2 connect the schema with the section collections

const Section = mongoose.model("section", sectionSchema);

//step:-1 create the Books schema

const bookSchema = new mongoose.Schema({
    name:{type:String, required:true},
    body:{type:String, required:true},
    author_id:{type: mongoose.Schema.Types.ObjectId, ref:"author", required:true}

},{
    versionKey:false,
    timestamps:true
});

//step:-2 connect the schema with all books cllection

const Book = mongoose.model("book", bookSchema);

//step:-1 create the Author schema
const authorSchema = new mongoose.Schema({
    first_name :{type:String, required:true},
    last_name:{type:String, required:true},
    books :[{type: mongoose.Schema.Types.ObjectId, ref:"book", required:true}]
},{
    versionKey:false,
    timestamps:true
});

//step:-2  connect the schema with all author collection

const Author = mongoose.model("author", authorSchema);

//step-1:- create the checkout schema
const checkoutSchema = new mongoose.Schema({
    student_id:{type:mongoose.Schema.Types.ObjectId, ref:"user", required:true},
    author_id:{type:mongoose.Schema.Types.ObjectId, ref:"author", required:true},
    book_id:{type:mongoose.Schema.Types.ObjectId, ref:"book", required:true}
},{
    versionKey:false,
    timestamps:true
});

//step:-2 connect the schema with all checkout collections

const Checkout = mongoose.model("checkout", checkoutSchema);

const app = express();
app.use(express.json());


//-----------CRUD APIS for users-------------
//post:- create users
app.post("/users", async (req, res)=>{
    const user = await User.create(req.body)//db.users.insert()
    return res.status(201).send({user});

})


//get:- get all users

app.get("/users", async (req,res)=>{
    const users = await User.find().sort({id:-1}).lean().exec()//db.users.find()  //thennable => promise
    return res.status(200).send({users});
})

//patch:- update the users

app.patch("/users/:id", async(req, res)=>{
    const user = await User.findByIdAndUpdate(req.params.id, req.body,{new:true}) //db.user.update({_id:" "},{$set:{}})
    return res.status(200).send({user});
} )


//delete: delete a single user

app.delete("/users/:id" , async(req, res)=>{
    const user = await User.findByIdAndDelete(req.params.id) //db.users.remove({_id:""})
    return res.status(200).send({user});
})

//getting a single user
app.get("/users/:id", async(req, res)=>{
    const users = await User.findById(req.params.id).lean().exec()  //db.users.findOne({_id:" "})

    return res.status(200).send({users});
})

//get all posts of a user
app.get("/users/:id", async(req,res)=>{
    //const posts = await Post.find({author: req.params.id}).populate("author_id").lean().exec();
    const author =await User.findById(req.params.id).lean().exec();
    return res.status(200).send({posts, author});

})



//----------CRUD for the sections---------
//post : create the section
app.post("/sections", async(req, res)=>{
    const section = await Section.create(req.body);
    return res.status(201).send({section});
})

//get: getting all the sections
app.get("/sections", async(req, res)=>{
    const sections = await Section.find().populate("books").lean().exec();
    return res.status(200).send({sections})
})

//get: getting a single user
app.get("/sections/:id", async(req, res)=>{
    const section = await Section.findById(req.params.id).lean().exec();
    return res.status(200).send({section});
})

//patch: updating a section
app.patch("/sections/:id", async(req, res)=>{
    const section = await Section.findByIdAndUpdate(req.params.id).lean().exec();
    return res.status(200).send({section});
})

//delete : deleting a section
app.delete("/sections/:id", async(req, res)=>{
    const section = await Section.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(200).send({section});
})

//----------------CRUD for Books-----------
//post: creating a book
app.post("/books",async(req,res)=>{
    const book = await Book.create(req.body);
    return res.status(201).send({book});
})

//get:getting all the books
app.get("/books", async(req,res)=>{
    const books = await Book.find().lean().exec();
    return res.status(200).send({books});
})

//get: getting a single book
app.get("/books/:id", async(req, res)=>{
    const book = await Book.findById(req.params.id).populate("author_id").lean().exec();
    return res.status(200).send({book});
})

//patch: updating a book
app.patch("/books/:id", async(req, res)=>{
    const book = await Book.findByIdAndUpdate(req.params.id).lean().exec();
    return res.status(200).send({book});
})

//delete a book
app.delete("/books/:id", async(req, res)=>{
    const book = await Book.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(200).send({book});
})

//-------------CRUD for author-----------
//creating a author
app.post("/authors", async(req, res)=>{
    const author = await Author.create(req.body);
    return res.status(201).send({author});
})

//getting all the authors
app.get("/authors", async(req, res)=>{
    const authors = await Author.find().lean().exec();
    return res.status(200).send({authors});
})

//getting a author
app.get("/authors/:id", async(req, res)=>{
    const author = await Author.findById(req.params.id).lean().exec();
    return res.status(200).send({author});
})

//updating a author
app.patch("/authors/:id", async(req, res)=>{
    const author = await Author.findByIdAndUpdate(req.params.id).lean().exec();
    return res.status(200).send({author});
})

//deleting a author
app.delete("/authors:/id", async(req, res)=>{
    const author = await Author.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(200).send({author});
})

//-------------------CRUD for Checkout------------
//creating a checkout
app.post("/checkouts", async(req, res)=>{
    const checkout = await Checkout.create(req.body);
    return res.status(200).send({checkout});
})

//getting all checkouts
app.get("/checkouts", async(req, res)=>{
    const checkouts = await Checkout.find().lean().exec();
    return res.status(200).send({checkouts});
})

//get a single checkout
app.get("/checkouts/:id", async(req, res)=>{
    const checkout = await Checkout.findById(req.params.id).lean().exec();
    return res.status(200).send({checkout});
})
/*
//update a checkout
app.patch("/checkouts/:id", async(req, res)=>{
    const checkout = await Checkout.findByIdAndUpdate(req.params.id).lean().exec();
    return res.status(200).send({checkout});
})

//deleting a checkout
app.delete("checkouts/:id", async(req, res)=>{
    const checkout = await Checkout.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(200).send({checkout});
})
*/

app.listen(2345, async function(){
    await connect();
    console.log("Listening to the port");
});