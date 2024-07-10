const router = require('express').Router();
const { User } = require('../../models');

//get all users
router.get('/', async (req,res) => {
    try{
        const userData = await User.find({}); 
        res.json(userData);
    } catch (err) {
        return res.status(500).json(err);
    }
});

//get one user
router.get('/:username', async (req,res) => {
    try{                               
        const userData = await User.find({username: req.params.username})
        res.json(userData);
    } catch(err){
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
            res.status(500).json({ message: 'User not found'});
        } 
    } catch(err){
        return res.status(500).json(err);
}});

//update user
router.put('/:username', async (req,res) => {
    try{
        const userData = await User.findOneAndUpdate({username: req.params.username}, req.body,
            {new: true});
        if(userData){
            res.status(200).json(userData)
        } else{
            res.status(500).json({ message: 'User not found'}); 
        };       
    } catch(err) {
        return res.status(500).json(err);
    }
});

//delete user
router.delete('/:username', async (req,res) =>{
    try {
        const userData = await User.findOneAndDelete({username: req.params.username},
            {new: true});
            if(userData){
                res.status(200).json(userData)
            } else{
                res.status(500).json({ message: 'User not found'}); 
            }; 
    } catch (error) {
        return res.status(500).json(err);
    }
})

module.exports = router;