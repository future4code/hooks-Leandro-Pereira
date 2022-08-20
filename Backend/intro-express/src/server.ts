import {app} from './app'
import {users} from './array'
import {posts} from './posts'

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Amazing')
})

app.get('/users', (req, res) => {
    res.send(users)
})

app.get('/posts', (req, res) => {
    res.send(posts)
})
app.listen(port, () => {})