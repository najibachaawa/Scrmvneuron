const User = require("../models/User");

const add = async(req, res) => {
    try {
        const { from, to, note } = req.body;
        const user = await User.findOne({ name: to });
        if (!user) return res.status(404).send('User not found');
        user.notes.push({ note, from });
        await user.save();
        return res.status(200).send(`Note added to ${to}`);
    } catch(err) {
        return res.status(500).json({ message: err.message });
    }
};

const get = async(req, res) => {
    try {
        const notes = User.findById(req.params.id).notes;
        return res.json(notes);
    } catch(err) {
        return res.status(500).json({ message: err.message });
    }
};

module.exports = {
    add,
    get
};