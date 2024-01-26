const path = require('path');
const express = require('express');
var cors = require('cors')

const PORT = process.env.PORT || 3001;

const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())


require('./routes')(app);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});