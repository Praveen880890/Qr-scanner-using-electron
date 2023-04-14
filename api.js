const express = require('express');

const expressApp = express();

expressApp.get('/validate/:str', (req, res) => {
  const { str } = req.params; 
  console.log(req)

  
  const val="hello@world"; 

  if (str === val) {
        res.status(200).json({ valid: true, message: 'String is valid.' });
  } else {
        res.status(200).json({ valid: false, message: 'String is invalid.' });
  }
});


const port = 3000; 
expressApp.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
