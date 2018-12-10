// post controller routes
var express = require('express');
var router = express.Router();

// post /api/post/createpost
router.post('/createpost',(req,res) => {
  console.log('Request query: ', req.query)
  console.log('Request body: ', req.body)
  res.send('post createpost');
});

// get /api/post/getpost
router.get('/getpost',(req,res) => {
  res.send('get getpost');
});

// delete /api/post/deletepost
router.delete('/deletepost',(req,res) => {
  res.send('delete deletepost');
});

// put /api/post/updatepost
router.put('/updatepost',(req,res) => {
  res.send('put updatepost');
});


module.exports = router;
