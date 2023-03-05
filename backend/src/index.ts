import mongoose from 'mongoose';
import { PORT } from './constants';

import * as serverService from './services/server.service';

(async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/');
    serverService.server.listen(process.env.PORT || PORT, function () {
      console.log(`Server is waiting for connections on port ${process.env.PORT || PORT}`);
    })
  } catch (error) {
    console.log(error);
  }
})();


process.on('SIGINT', async () => {
  await mongoose.disconnect();
  process.exit();
});
