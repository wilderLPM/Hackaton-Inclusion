import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

export default class AbstractModels {
  connexion = null;
  constructor() {
    console.log(process.env.USERNAME);
    
    this.singleton();
  }
  singleton() {
    if(this.connexion === null) {
      this.connexion = mysql.createConnection({
        host: 'localhost',
        user: 'charlotte',
        password: 'IntoTheWild',
        database: 'echo'
      });
    }
  }
}