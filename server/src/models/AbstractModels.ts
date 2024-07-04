import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

export default class AbstractModels {
  connexion = null;
  constructor() {
    this.singleton();
  }
  singleton() {
    if(this.connexion === null) {
      this.connexion = mysql.createConnection({
        host: 'localhost',
        user: process.env.USERNAME,
        password: process.env.USER_PASSWORD,
        database: 'echo'
      });
    }
  }
}