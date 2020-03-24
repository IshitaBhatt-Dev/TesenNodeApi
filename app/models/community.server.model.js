
var mongoose = require('mongoose');
// Setup schema
var communitySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    city: String,
    category: String,
    create_date: {
        type: Date,
        default: Date.now
    },
    post: [
        {
        postDescription: {
            type: String, 
            required: false,
        },
        comment: [
            {
            commentDescription:{
                type:String, 
                required: false
            }
            }
        ]
        }
    ]
});
// Export community model
var Community = module.exports = mongoose.model('community', communitySchema);
module.exports.get = function (callback, limit) {
    Community.find(callback).limit(limit);
}