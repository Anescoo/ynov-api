import Router from '@koa/router'
import * as ListControllers from '#components/lists/list-controllers.js'

const lists = new Router

lists.get('/', ListControllers.allLists)
lists.get('/:id', ListControllers.listId)
lists.post('/', ListControllers.createList)
lists.put('/:id', ListControllers.updateList)
lists.delete('/:id', ListControllers.deleteList)

export default lists