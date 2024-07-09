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
        const user = await User.findById({username: req.body.username})
        res.json(user);
    } catch(err){
        console.error(err)
        return res.status(500).json(err);
    }
})

//create new user
router.post('/', async (req,res) => {
    try {                                //do I add the email too?
        const newUser = await User.create({username: req.body.username})
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

router.put('/', async (req,res) => {
    try{
        const user = await User.findOneAndUpdate({ username: req.body.user})
    } catch(err) {
        console.error(err)
        return res.status(500).json(err);
    }
})
