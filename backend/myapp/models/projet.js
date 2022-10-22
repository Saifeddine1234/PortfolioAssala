var mongoose = require('mongoose');

var dataSchema = new mongoose.Schema({
    nomProjet:String,
    imageProjet:String,
    descriptionProjet:String,
} );

dataSchema.pre('save', function (next) {
    var todo = this;
    var currentDate = new Date();
    if (!todo.date_up) {
        todo.date_up = currentDate;
    }
    next();

} );

module.exports = mongoose.model('projet', dataSchema);
