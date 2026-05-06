const User = require("../models/User");

// CREATE
exports.createUser = async(req, res) => {
    try{
        const user = await User.create(req.body);
        res.send(user);
    }
    catch(err){
        res.status(500).send(err.message);
    }
};


// READ ALL
exports.getUsers = async (req, res) => {
    try{
        const users = await User.find();
        res.send(users);
    }
    catch(err){
        res.status(500).send(err.message);
    }
};

// READ ONE
exports.getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.send(user);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// UPDATE
exports.updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.send(user);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// DELETE
exports.deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.send("Deleted");
    } catch (err) {
        res.status(500).send(err.message);
    }
};