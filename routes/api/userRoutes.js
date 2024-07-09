const router = require('express').Router();
const { User } = require('../../models');

//get all users
router.get('/', async (req,res) => {
    try{
        const user = await User.find({});
        res.json(user);
    } catch (err) {
        console.error(err)
        return res.status(500).json(err);
    }
});

//get one user
router.get('/:id', async (req,res) => {
    try{                                //not sure this is correct
        const user = await User.find({username: req.body.username})
        res.json(user);
    } catch(err){
        console.error(err)
        return res.status(500).json(err);
    }
})

//create new user
router.post('/', async (req,res) => {
    try {                                
        const newUser = await User.create(req.body)
        newUser.save();

        if(newUser) {
            res.status(200).json(newUser);
        } else { 
            console.log('Error occured. Please try again.');
            res.status(500).json({ message: 'Error'});
        } 
    } catch(err){
        console.error(err)
        return res.status(500).json(err);
}});

router.put('/:username', async (req,res) => {
    try{
        const user = await User.findOneAndUpdate({username: req.params.username}, req.body)        
    } catch(err) {
        console.error(err)
        return res.status(500).json(err);
    }
})

module.exports = router;