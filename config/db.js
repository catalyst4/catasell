const mongoose = require('mongoose');
const MONGOURI = 'mongodb+srv://jayk:8CqafqA6iIIziyHJ@cluster0.mz5a2.mongodb.net/<dbname>?retryWrites=true&w=majority';

mongoose.set('useFindAndModify', false);

const initiateMongo = async () => {

    try {
        
        await mongoose.connect(MONGOURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to DB');

    } catch(e) {
        console.log(e);
        throw e;
    }

};

module.exports = initiateMongo;