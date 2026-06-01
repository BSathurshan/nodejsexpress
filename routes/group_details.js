const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('who', {
    title: `Group members =>  B.Sathurshan. 22020896T .Nijaanin. 22021019 `
  });
});

module.exports = router;