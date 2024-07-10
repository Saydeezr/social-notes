const router = require('express').Router();
const { Thought, User } = require('../../models');

//get all thoughts
router.get('/', async (req,res) => {
    try{
        const thoughtData = await Thought.find({});
        res.json(thoughtData);
    } catch (err) {
        return res.status(500).json(err);
    }
});

//get thought by id
router.get('/:thought_id', async (req,res) => {
    try {
        const thoughtData = await Thought.findOne({id:req.params._id});
        if(thoughtData) {
            res.status(200).json(thoughtData)
        } else{
            res.status(404).json({message: 'Thought not found'})
        }
    } catch (err) {
        res.status(500).json(err)
    }
});

//create new thought
router.post('/', async (req,res) => {
    try {
        const newThought = await Thought.create(req.body);
        const userData = await User.findOne(req.body.username);

        if (newThought && userData) {
            user.thoughts.push(newThought._id);
            await user.save();
            res.status(200).json(newThought)
        } else{
            res.status(500).json({message: 'Could not create thought. Please try again.'})
        }
    } catch (err) {
        return res.status(500).json(err);
    }
});

//update thought
router.put('/:_id', async (req,res) =>{
    try{
        const thoughtData = await Thought.findByIdAndUpdate({id: req.params._id}, req.body,
            {new: true});

        if(thoughtData){
            res.status(200).json(thoughtData)
        } else{
            res.status(400).json({message: 'Could not update. Please try again.'})
        }
    } catch(err) {
        return res.status(500).json(err);
    }
});

//delete thought
router.delete('/:_id', async(req,res) =>{
    try {
        const thoughtData = await Thought.findByIdAndDelete(req.params._id);

        if(thoughtData){
            res.status(200).json(thoughtData)
        } else{
            res.status(400).json({message: 'Thought not found. Please try again.'})
        }
    } catch(err) {
        return res.status(500).json(err);
    }
});


module.exports = router;