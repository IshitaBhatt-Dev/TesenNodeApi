
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome',
    });
});
// Import community controller
var communityController = require('../controllers/community.server.controller'); 
// community routes
router.route('/communities')
    .get(communityController.index)
    .post(communityController.new);

router.route('/communities/:community_id')
    .get(communityController.view)
    .put(communityController.update)
    .delete(communityController.delete);


// Export API routes
module.exports = router;