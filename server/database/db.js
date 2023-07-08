import mongoose from "mongoose";

export const Connection = async (USERNAME, PASSWORD) => {
    const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.aef53pq.mongodb.net/?retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL);
        console.log('connectedd');
        let db = mongoose.connection

        db.on('error', console.error.bind(console, 'connection error'))

        db.once('open', function () {
            console.log('connected')
        })
    } catch (err) {
        console.log(err.message)
    }
}

export default Connection;