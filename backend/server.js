import express from 'express'
import config from './config.js'
import bodyParser  from 'body-parser'
import mysql from 'mysql'

const app = express()
const port = 5000 || process.env.PORT

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json())

app.get('/', (req, res) => {
    res.json({message: "ok"})
})

app.post('/api/getCourses', (req, res) => {
    const connection = mysql.createConnection(config)

    const sql = ''

    connection.query(sql, (error, result) => {
        if (error){
            return console.error(error.message)
        }
        res.send(result)
    })
})

app.listen(port, () => {
    console.log('listening to ' + port)
})