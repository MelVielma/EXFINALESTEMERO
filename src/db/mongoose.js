const mongoose = require('mongoose')

if(process.env.NODE_ENV === 'production'){
	var connectionURL = process.env.connectionURL
}
else{
	const supersecreto = require('../config.js')
	var connectionURL = supersecreto.connectionURL
}

mongoose.connect(connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true
})