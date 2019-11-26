import mongoose from 'mongoose';

const componentSchema = new mongoose.Schema({
    name: String,
    category: String,
    package: String,
    box: Number,
    cell: Number,
    quantity: Number,
    note: String,
    link: String,
    created_by: String,
    created_on: String,
    updated_by: String,
    updated_on: String
});

const Component = mongoose.model('Component', componentSchema);

export default Component;