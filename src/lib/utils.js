//létrehozni egy .env filet amiben tároljuk a mongoDB -hez az URL-t
//npm i mongoose@8.0.0
//hasznéld a mongooz dokumentációt ott le van írva hogy kell kapcsolódnia mongoDB -hez

//meg kell nézni hogy csatlakoztunk e már az adatbázishoz különben minden frissítéskor ujracsatlakozik
// const { default: mongoose } = require('mongoose');

// const connection = {};

// export const connectToDb = async () => {
//   try {
//     if (connection.isConnected) {
//       console.log('Using existing connection');
//       return;
//     }
//     const db = await mongoose.connect(process.env.MONGO);
//     connection.isConnected = db.connection[0].readyState;
//   } catch (error) {
//     // handleError(error);
//     console.log(error);
//     throw new Error('Error connetcting to database', error);
//   }
// };

// //kell csinálni egy model schemat- models.js
import mongoose from 'mongoose';

const connection = {};

export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      console.log('Using existing connection');
      return;
    }
    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
