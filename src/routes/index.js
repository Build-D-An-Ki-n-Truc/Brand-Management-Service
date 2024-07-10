const express = require('express');
const router = express.Router();

// Check api Key

// Check permissions

router.use('/new', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Welcome to API'
    })
})

module.exports = router;