// gunakan module express
var express = require('express')

// inisialisasi module express
var app = express()

// gunakan modul filesystem
var fs = require('fs')

// gunakan modul path
const path = require('path')

// Router halaman root
app.get('/',(req,res) => {

    // baca file html
    fs.readFile('./views/index.html', (err,data) => {

        // jika ada error
        if (err) {
            // maka tampilkan halaman error dengan module "path"
            res.sendFile(path.join(__dirname + "./404/404.html"))
        }else{
            // jika tidak ada error maka tampilkan halaman
            res.write(data)
        }
        // tutup respon halaman
        res.end()
    })
})


// Router halaman Course
app.get('/course', (req,res) => {
    fs.readFile('./views/course.html', (err,data) => {
        if (err) {
            res.sendFile(path.join(__dirname + "./404/404.html"))
        }else{
            res.write(data)
        }
        res.end()
    })
})

// Router halaman Job
app.get('/job', (req,res) => {
    fs.readFile('./views/job.html', (err,data) => {
        if (err) {
            res.sendFile(path.join(__dirname + "./404/404.html"))
        }else{
            res.write(data)
        }
        res.end()
    })
})

// Router halaman Contact
app.get('/contact', (req,res) => {
    fs.readFile('./views/contact.html', (err,data) => {
        if (err) {
            res.sendFile(path.join(__dirname + "./404/404.html"))
        }else{
            res.write(data)
        }
        res.end()
    })
})

// Router halaman About
app.get('/about', (req,res) => {
    fs.readFile('./views/about.html', (err,data) => {
        if (err) {
            res.sendFile(path.join(__dirname + "./404/404.html"))
        }else{
            res.write(data)
        }
        res.end()
    })
})

// Router halaman course/full-stack-developer
app.get('/course/full-stack-developer', (req,res) => {
    fs.readFile('./views/course/full-stack-developer.html', (err,data) => {
        if (err) {
            res.sendFile(path.join(__dirname + "./404/404.html"))
        }else{
            res.write(data)
        }
        res.end()
    })
})

// Router halaman course/robotik
app.get('/course/robotik', (req,res) => {
    fs.readFile('./views/course/robotik.html', (err,data) => {
        if (err) {
            res.sendFile(path.join(__dirname + "./404/404.html"))
        }else{
            res.write(data)
        }
        res.end()
    })
})

// Router halaman course/ui-ux
app.get('/course/ui-ux', (req,res) => {
    fs.readFile('./views/course/ui-ux.html', (err,data) => {
        if (err) {
            res.sendFile(path.join(__dirname + "./404/404.html"))
        }else{
            res.write(data)
        }
        res.end()
    })
})

// Router halaman course/ui-ux
app.get('/category/web-programming', (req,res) => {
    fs.readFile('./views/category/web-programming.html', (err,data) => {
        if (err) {
            res.sendFile(path.join(__dirname + "./404/404.html"))
        }else{
            res.write(data)
        }
        res.end()
    })
})

// Router halaman course/ui-ux
app.get('/category/iot', (req,res) => {
    fs.readFile('./views/category/iot.html', (err,data) => {
        if (err) {
            res.sendFile(path.join(__dirname + "./404/404.html"))
        }else{
            res.write(data)
        }
        res.end()
    })
})
// Router halaman course/ui-ux
app.get('/category/web-designer', (req,res) => {
    fs.readFile('./views/category/web-designer.html', (err,data) => {
        if (err) {
            res.sendFile(path.join(__dirname + "./404/404.html"))
        }else{
            res.write(data)
        }
        res.end()
    })
})

// membuat/menggunakan folder public untuk diakses banyak file
app.use(express.static(__dirname + '/public'))

// jalankan server dengan port 8000
app.listen(8000, () => {console.log('akses http://localhost:8000')})
