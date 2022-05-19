const express = require('express');
const response = require ('../../../network/response')
const router = express.Router();


router.get('',function (req, res) {
    // res.send({
    //     success:'success 1',
    // });
    response.success(req, res, '', 200)
})

router.get('/succes2',function (req, res) {
    res.send({
        success:'success 2',
    });
})



// res.send({
//     console.log(req, query);
//     'success': 'success'
// })

module.exports = router;


