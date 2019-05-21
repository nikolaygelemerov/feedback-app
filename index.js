const express = require('express');
require('./services/passport'); // just execute passport.js, nothing is exported from there

const app = express();

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
