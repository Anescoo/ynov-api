import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import { API_V1_ROUTER } from '#routes/index.js'
import { API_V2_ROUTER } from '#routes/index.js'
import '#config/database.js'
// import Exemple from "#components/exemple/exemple-model.js"
import respond from "koa-respond"

const app = new Koa()

app
.use(bodyParser())
.use(respond())

.use(API_V1_ROUTER.routes())
.use(API_V1_ROUTER.allowedMethods())

.use(API_V2_ROUTER.routes())
.use(API_V2_ROUTER.allowedMethods())

app.listen(process.env.PORT, () => console.log(`Serveur disponible à l'adresse suivante: http://localhost:${process.env.PORT}`))

