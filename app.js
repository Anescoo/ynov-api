import Koa from 'koa'
import Router from '@koa/router'
import bodyParser from 'koa-bodyparser'

const app = new Koa()
const router = new Router()
const todos = [
	{ 
		id: 1,
		title: 'Acheter des patates'
	},
	{ 
		id: 2,
		title: 'Acheter des fraises'
	},
	{ 
		id: 3,
		title: 'Acheter des pommes'
	},
]

router.get('/todos', (ctx, next) => {
	  ctx.body = todos
})

router.get('/todos/:id', (ctx) => {
	const task = todos.find(t => parseInt(ctx.params.id) === t.id)
	ctx.body = task
})

router.post('/todos', (ctx) => {
	const newTask = {
		id: todos.length + 1,
		title: ctx.request.body.title
	}
	todos.push(newTask)
	console.log(todos);
	ctx.status = 204
})

router.put('/todos/:id', (ctx) => {
	const task = todos.find(t => parseInt(ctx.params.id) === t.id)
	task.title = 'Modifié'
	ctx.body = todos
})

router.delete('/todos/:id', (ctx) => {
	const updatedTodos = todos.filter(t => parseInt(ctx.params.id) !== t.id)
	ctx.body = updatedTodos
})


// app.use(async (ctx, next) => {
// 	console.log(ctx)
// 	next()
// })

app
.use(bodyParser())
.use(router.routes())
.use(router.allowedMethods())

app.listen(process.env.PORT, () => console.log(`Serveur disponible à l'adresse suivante: http://localhost:${process.env.PORT}`))
