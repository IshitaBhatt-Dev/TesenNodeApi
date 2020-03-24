// Import community model
const Community = require('../models/community.server.model');
// Handle index actions
exports.index = function (req, res) {
    Community.get(function (err, communities) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "communities retrieved successfully",
            data: communities
        });
    });
};
// Handle create community actions
exports.new = function (req, res) {
    const community = new Community(req.body);
// save the community and check for errors
    community.save(function (err) {
        // Check for validation error
        if (err)
            res.json(err);
        else
            res.json({
                message: 'New community created!',
                data: community
            });
    });
};
// Handle view community info
exports.view = function (req, res) {
    Community.findById(req.params.community_id, function (err, community) {
        if (err)
            res.send(err);
        res.json({
            message: 'community details loading..',
            data: community
        });
    });
};


exports.update = function (req, res) {
    // Use the 'User' static 'findByIdAndUpdate' method to update a specific user
    Community.findById(req.params.community_id, function (err, community) {
        if (err)
            res.send(err);
            
            community.name = req.body.name ? req.body.name : community.name;
            community.description = req.body.description;
            community.type = req.body.type;
            community.city = req.body.city;
            community.category = req.body.category;
            community.post = req.body.post;  
            community.post.comment = req.body.post.comment;   
            // save the community and check for errors
            
            community.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'community Info updated',
                data: community
            });
        });	
	})
};

// Handle delete community
exports.delete = function (req, res) {
    Community.remove({
        _id: req.params.community_id
    }, function (err, community) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'community deleted'
        });
    });
};