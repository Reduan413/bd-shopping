import express from 'express';
import User from '../models/userModel';
import { getToken } from '../util';

const router = express.Router();

router.post('/signin', async (req, res) => {
    const signinUser = await User.findOne({
        email: req.body.email,
        password: req.body.password
    });
    if(signinUser){
        res.send({
            id: signinUser.id,
            name: signinUser.name,
            email: signinUser.email,
            isAdmin: signinUser.isAdmin,
            token: getToken(signinUser)
        })
    }
    else {
        res.send({mag: "no user"})
    }
})

router.get("/createadmin", async (req, res) => {
    try {
        const user = new User({
            name: 'Reduan',
            email: 'reduan@gmail.com',
            password: '12345',
            isAdmin: true
        });
        const newUser = await user.save();
        res.send(newUser);
    }catch (error) {
        res.send({ mag: error.message});
    }
    
});

export default router;
