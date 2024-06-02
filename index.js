const express = require('express') 
const mongoose = require('mongoose')
const Product = require('./models/product.model.js')
const productRoute = require('./routes/product.route.js');
const PORT = process.env.PORT || 3000;
const app = express() 

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//routes
app.use("/api/products", productRoute)


mongoose.connect('mongodb+srv://justgoldwing:xECM3689@gravitas.hm47uwu.mongodb.net/Node-API')
  .then(() => {
    console.log('Connected!')
    app.listen(PORT, () => {
      console.log('Server is running on port 3000.')
    })
  })
  .catch( () => console.log('connection failed'))

// mongoose.connect('mongodb+srv://justgoldwing:xECM3689@gravitas.hm47uwu.mongodb.net/sample_mflix')
//   .then(() => {
//     console.log('Connected!')
//     app.listen(PORT, () => {
//       console.log('Server is running on port 3000.')
//     })
//   })
//   .catch( (error) => console.log('connection failed:', error.message))