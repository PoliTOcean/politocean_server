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
    created_by: {
        type: mongoose.Schema.Types.Number,
        ref: 'User',
        autopopulate: true
    },
    created_on: Date,
    updated_by: {
        type: mongoose.Schema.Types.Number,
        ref: 'User',
        autopopulate: true
    },
    updated_on: Date
});

componentSchema.plugin(require('mongoose-autopopulate'));

const Component = mongoose.model('Component', componentSchema);

export default Component;