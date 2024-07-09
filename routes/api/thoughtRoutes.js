const router = require('express').Router();
const { Thought } = require('../../models');

router.get('/', async (req,res) => {
    try{
        const thought = await Thought.find({});
        res.json(thought);
    } catch (err) {
        console.error(err)
        return res.status(500).json(err);
    }
});

module.exports = router;