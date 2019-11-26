import 'dotenv/config';
import mongoose from 'mongoose';

import electronics from './electronics';
import mining from './mining'

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(async () => {
    electronics.listen(process.env.ELEC_PORT, () => console.log(`Server listening on port ${process.env.ELEC_PORT}`));
    mining.listen(process.env.MINING_PORT, () => console.log(`Server listening on port ${process.env.MINING_PORT}`));
});