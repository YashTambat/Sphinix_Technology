
const express=require("express");
const cors=require("cors")
const app= express();

app.use(express.json());
app.use(cors())
const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/panel"); 
/*      /userapp is database name
*/
const User = mongoose.model('Users', { //users is collection
    move: Number, 
    xpos:Number,
    ypos:Number });


app.post("/send",async function(req,res){
    const move= req.body.move;
    const xpos= req.body.xpos;
    const ypos= req.body.ypos;


        // const user1 = new User({ 
        //     move: move,
        //     xpos:xpos,
        //     ypos:ypos
        // });
        // user1.save();
        await User.create({move: move,
            xpos:xpos,
            ypos:ypos})
  
        res.json({msg:"data stored successfully"});

})

app.listen(3001, () => {
    console.log(`Example app listening on port`)
})