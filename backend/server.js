import express from 'express'
import config from './config.js'
import bodyParser  from 'body-parser'
import mysql from 'mysql'
import cors from 'cors'

const app = express()
const port = 5000 || process.env.PORT

app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json())

app.get('/', (req, res) => {
    res.json({message: "ok"})
})

app.post('/api/saveCourses', (req, res) => {
    console.log('post get courses')
    const connection = mysql.createConnection(config)

    const {email, nodes, edges } = req.body

    console.log(nodes)
    console.log(edges)

    console.log(email)
    const sql = `
        UPDATE user_courses
        SET 
            edges = '${JSON.stringify(edges)}',
            nodes = '${JSON.stringify(nodes)}'
        WHERE  
            email = '${email}'
    `

    connection.query(sql, (error, result) => {
        if (error){
            return console.error(error.message)
        }
        res.json(result)
    })
})

app.post('/api/getCourses', (req, res) => {
    console.log('post get courses')
    const connection = mysql.createConnection(config)

    const {email} = req.body

    const sql = `SELECT * FROM user_courses WHERE email = '${email}'`

    connection.query(sql, (error, result) => {
        if (error){
            return console.error(error.message)
        }
        console.log(result)
        res.json(result)
    })
})

app.get('/api/getAllCourses', (req, res) => {
    console.log('post get courses')
    const connection = mysql.createConnection(config)

    const sql = `SELECT * FROM courses`

    connection.query(sql, (error, result) => {
        if (error){
            return console.error(error.message)
        }
        console.log(result)
        res.json(result)
    })
});

app.post('/api/getUserCourses', (req, res) => {
    console.log('post get user courses')
    const connection = mysql.createConnection(config)

    const {email, term} = req.body

    const sql = `
        SELECT * 
        FROM courses_taken
        INNER JOIN courses ON courses_taken.course_code = courses.name
        WHERE courses_taken.term = '${term}' AND courses_taken.user = '${email}'
    `

    connection.query(sql, (error, result) => {
        if (error){
            return console.error(error.message)
        }
        console.log(result)
        res.json(result)
    })
})

app.post('/api/addUserCourse', (req, res) => {
    console.log('add user course')
    const connection = mysql.createConnection(config)

    const {email, term, course} = req.body

    const sql = `
        INSERT INTO courses_taken (user, course_code, term)
        VALUES ('${email}', '${course}', '${term}')
    `

    connection.query(sql, (error, result) => {
        if (error){
            return console.error(error.message)
        }
        console.log(result)
        res.json(result)
    })
})

app.post('/api/loadCourseData', (req, res) => {
    console.log('post get user courses')
    const connection = mysql.createConnection(config)

    const {course} = req.body

    const sql = `
        SELECT * 
        FROM courses
        WHERE name = '${course}'
    `

    connection.query(sql, (error, result) => {
        if (error){
            return console.error(error.message)
        }
        console.log(result)
        res.json(result)
    })
})


app.post('/api/searchCourses', (req, res) => {
    console.log('post searchCourses')
    const connection = mysql.createConnection(config)

    const {query} = req.body
    
    const sql = `
        SELECT * 
        FROM courses
        WHERE name like '%${query}%'
    `
    
    connection.query(sql, (error, result) => {
        if (error){
            return console.error(error.message)
        }
        console.log(result)
        res.json(result)
    })
})

app.get('/api/getAllCourses', (req, res) => {
    console.log('post get courses')
    const connection = mysql.createConnection(config)

    const sql = `SELECT * FROM courses`

    connection.query(sql, (error, result) => {
        if (error){
            return console.error(error.message)
        }
        console.log(result)
        res.json(result)
    })
});

app.listen(port, () => {
    console.log('listening to ' + port)
})