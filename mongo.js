const { MongoClient } = require('mongodb')

MongoClient.connect('mongodb://127.0.0.1:27017',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err,client) => {
    if (err) {
        return console.log('Gagal menghubungkan!')
    }
    console.log('Terhubung!')

    const db = client.db('TodoApp')

    db.collection('Todos').insertOne({
        text: 'Mandi',
        waktu: '09:00',
    })

    db.collection('Users').insertOne({
        name: 'Rasya',
        age: 4,
        location: 'Bogor'
    })


    db.collection('Todos').find().toArray((err,result) => {
        console.log(result)
    })
})

const listen = (string) => {
    console.log('Hello'+string)
}

module.exports = { listen }