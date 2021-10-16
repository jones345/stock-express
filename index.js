const express = require('express')
const app = express()
const stock = require("./Routes/stock")
const mongoose = require('mongoose')
const dotenv = require("dotenv")

dotenv.config();
const port = process.env.PORT || 3045

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
  
}
).then(()=> console.log("db connect succesful")).catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(express.json())
app.use("/api/stock", stock);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})