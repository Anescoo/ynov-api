import mongoose from 'mongoose'

mongoose.connect("mongodb://0.0.0.0:27017/ynov-api")
.then(() => console.log("Connexion à MongoDB réussie !"))
.catch((e) => console.log(`Connexion à MongoDB échouée ! : ${e}`))
