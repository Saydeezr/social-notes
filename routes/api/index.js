const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

//redirect to proper routes file
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;