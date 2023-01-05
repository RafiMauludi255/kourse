const { MongoClient } = require('mongodb')

MongoClient.connect('mongodb://127.0.0.1:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true
},
    (err,client) => {
        if (err) {
            return console.log('gagal menghubungkan!')
        }
        console.log('koneksi berhasil!')

        const db = client.db('TodoApp')

        db.collection('Todos').insertOne({
            text: 'Tambah Todo',
            completed: false
        }, (err,result) => {
            if (err){
                return console.log('Gagal menambahkan todo', err)
            }
            console.log(result)
        })

        db.collection('Users').insertOne({
            name: 'Feby',
            age: 18,
            location: 'Bogor'
        }, (err,result) => {
            if (err) {
                return console.log('Gagal menambahkan!')
            }
            console.log(result)
        })
    }
)