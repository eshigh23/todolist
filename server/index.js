const express = require('express')

const app = express()
const port = 3000;



app.get('/api/status', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString()
  });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
