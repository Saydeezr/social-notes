const router = require('express').Router();
const { User } = require('../../models');

router.get('/', async (req,res) => {
    try{
        const user = await User.find({});
        res.json(user);
    } catch (err) {
        console.error(err)
        return res.status(500).json(err);
    }
});

router.get('/:id', async (req,res) => {
    try{
        const user = await User.findById({})
    } catch(err){
        console.error(err)
        return res.status(500).json(err);
    }
})

router.post('/', async (req,res) => {
    try {
        const newUser = await User.create({username: req.body.user})

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
        const user = await User.up
    } catch(err) {
        console.error(err)
        return res.status(500).json(err);
    }
})
