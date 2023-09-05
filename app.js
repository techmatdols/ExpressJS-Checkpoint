const express = require('express');
const app = express();

// Your code for routes and middleware goes here

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
