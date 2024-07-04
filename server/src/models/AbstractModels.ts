import mysql from 'mysql2';

export default class AbstractModels {
  connexion = null;
  constructor() {
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