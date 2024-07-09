const router = require('express').Router();
const { User } = require('../../models');

//get all users
router.get('/', async (req,res) => {
    try{
        const userData = await User.find({}); 

        res.json(userData);
    } catch (err) {
        console.error(err)
        return res.status(500).json(err);
    }
});

//get one user
router.get('/:id', async (req,res) => {
    try{                               
        const userData = await User.find({username: req.body.username})
        res.json(userData);
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

//update user
router.put('/:username', async (req,res) => {
    try{
        const user = await User.findOneAndUpdate({username: req.params.username}, req.body)        
    } catch(err) {
        console.error(err)
        return res.status(500).json(err);
    }
})

module.exports = router;