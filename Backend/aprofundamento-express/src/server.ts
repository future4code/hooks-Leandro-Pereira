import { app } from './app'
import { toDo, Tasks } from './toDo'




const port = process.env.PORT || 3000;

app.get('/ping', (req, res) => {
    res.send("pong 🏓")
})

//exercicio 4
app.get("/tasks/:status", (req, res) => {
    const statusReq = (req.params.status)
    let complete: Tasks[] = []
    toDo.map((todo) => {
        if (todo.completed.toString() === statusReq) {
            complete.push(todo)
        }
    })
    res.send(complete)
})

//exercicio 5
app.post("/tasks/create", (req, res) => {
    const addTitle = req.body.title
    const addStatus = req.body.completed

    const addTasks = {

        userId: 7,
        id: 7,
        title: addTitle,
        completed: addStatus

    }

    toDo.push(addTasks)

    res.send(toDo)

})
// exercicio 6
app.post("/tasks/changeStatus/:id", (req, res) => {
    const toDoId = Number(req.params.id)
    toDo.map((toDos, index) =>{
        if(toDoId === toDos.id) {
            toDo.splice(index, 1)
            const newTask = {
                ...toDos, completed: !toDos.completed
            }

            toDo.push(newTask)
        }
    })
 
    res.send(toDo)
})

//exercicio 7

app.delete("/tasks/delete/:id",(req, res)=>{

    const deleteId = Number(req.params.id)
    toDo.map((toDos, index)=>{
        if(deleteId === toDos.id) {
            toDo.splice(index, 1)
        }
    })
    res.send(toDo)

})

app.listen(port, () => { })

//exercicio 8

app.get("/tasks/task/:id", (req, res) => {
    const userTasks: Tasks[] = []
    const userId = Number(req.params.id)

    toDo.map((toDos)=>{
        if(userId === toDos.id) {
            userTasks.push(toDos)
        }
    })

    res.send(userTasks)
})