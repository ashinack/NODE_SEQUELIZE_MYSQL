const express=require('express')
const app=express()
const cors=require('cors')
const Productroute=require('./routes/productRouter')


let corOptions={
    origin:'https://localhost:8001'
}

//middleware

app.use(cors(corOptions))

app.use(express.json())

app.use(express.urlencoded({extended:true}))


//testing api
app.use('/api',Productroute)

 
const PORT=process.env.PORT||8080

//server
app.listen(PORT,()=>{
    console.log(`listing ${PORT}`);
})



