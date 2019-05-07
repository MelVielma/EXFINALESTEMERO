const mongoose = require('mongoose')

if(process.env.NODE_ENV === 'production'){
  var connectionURL = process.env.connectionURL
}
else{
  const config = require('../config.js')
  var connectionURL = config.connectionURL
}

mongoose.connect( connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true
})
