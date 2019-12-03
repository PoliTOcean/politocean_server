import 'dotenv/config';
import mongoose from 'mongoose';

import electronics from './electronics';
// import mining from './mining'

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => electronics.listen(process.env.PORT, () => console.log(`Server listening on port ${process.env.ELEC_PORT}`)));