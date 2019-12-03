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
    created_by: Number,
    created_on: Date,
    updated_by: Number,
    updated_on: Date
});

const Component = mongoose.model('components', componentSchema);

export default Component;