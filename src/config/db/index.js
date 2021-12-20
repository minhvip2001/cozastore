const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect(
      'mongodb+srv://minh:minh2302@cozastore.zng09.mongodb.net/test',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    );
    console.log('Connect successfully!!!');
  } catch (err) {
    console.log('Connect failure!!!');
  }
}

module.exports = { connect };
