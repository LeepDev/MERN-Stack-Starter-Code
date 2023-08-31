const User = require('../../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

module.exports = {
    create,
    login,
    checkToken
}

async function checkToken(req,res) {
    // Verify middleware is doing its job
    console.log('req.user', req.user)
    res.json(req.exp)
}

async function login(req, res) {
    try {
        // Find user
        const user = await User.findOne({ email: req.body.email })
        // Throw error if user isn't found
        if (!user) throw new Error();
        // Check pw
        const match = await bcrypt.compare(req.body.password, user.password)
        // If no match, throw error
        if (!match) throw new Error();
        // send token back (login time!)
        res.json(createJWT(user))
    } catch {
        res.status(400).json('Bad Credentials')
    }
}

async function create(req, res) {
    try {
        // Add the user to the db
        const user = await User.create(req.body)
        // token will be a string
        const token = createJWT(user)
        // Yes, we can use res.json to send back just a string
        // The client code needs to take this into consideration
        res.json(token)
    } catch (err) {
        // Client will check for non-2xx status code
        // 400 = Bad Request
        res.status(400).json(err)
    }
}

// Helper Function

function createJWT(user) {
    return jwt.sign(
        // data payload
        { user },
        process.env.SECRET,
        { expiresIn: '24h' }
    )
}