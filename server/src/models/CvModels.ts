import AbstractModels from './AbstractModels.js';

export default class CvModels extends AbstractModels {
  constructor() {
    super();
  }
  findAll() {
    return new Promise((resolve, reject) => {
      this.connexion.query('SELECT * FROM cv', (err: any, result: any) => {
        if(err) reject(err);
        resolve(result);
      });
    });
  }
  findOne(id: number) {
    return new Promise((resolve, reject) => {
      this.connexion.query('SELECT * FROM cv WHERE id=?',[id], (err: any, result: any) => {
        if(err) reject(err);
        resolve(result[0]);
      });
    });
  }
  readOneActions(id: number) {
    return new Promise((resolve, reject) => {
      this.connexion.query('SELECT * FROM cv WHERE id = ?', [id], (err: any, result: any) => {
        if(err) reject(err)
        resolve(result);
      });
    });
  }
  createOne (cv: any) {
    return new Promise((resolve, reject) => {
      this.connexion.query(
        `
                    INSERT INTO cv
                        (nom, adresse, tel, mail, experience, formation, skills, profil, age, musique)
                    VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                `,
        [
          cv.nom,
          cv.adresse,
          cv.tel,
          cv.mail,
          cv.experience,
          cv.formation,
          cv.skills,
          cv.profil,
          cv.age,
          cv.musique
        ],
        (err: any, result: any) => {
          if(err) reject(err)
          resolve(result);
        }
      );
    });
  }
  patchOne(cv: any, id: number) {
    let sql = 'UPDATE cv ';
    let values = Object.values(cv);
    for (const [key] of Object.entries(cv)) {
      if(key !== Object.keys(cv)[Object.keys(cv).length - 1])
        sql += ` SET ${ key.toString() } = ?, `;
      else
        sql+= `SET ${ key.toString()} = ? `;
    }
    sql += 'WHERE id = ?';
    return new Promise((resolve, reject) => {
      this.connexion.query(sql, [...values, id], (err: any, result: any) => {
        if(err) {
          reject(err);
        }
        resolve(result);
      })
    })
  }
  putOne(cv: any, id: number) {
    return new Promise((resolve, reject) => {
      this.connexion.query(`
            UPDATE cv
            SET nom=?,
                adresse=?,
                tel=?,
                mail=?,
                experience=?,
                formation=?,
                skills=?,
                profil=?,
                age=?,
                musique=?
            WHERE id = ?
        `, [
        cv.nom,
        cv.adresse,
        cv.tel,
        cv.mail,
        cv.experience,
        cv.formation,
        cv.skills,
        cv.profil,
        cv.age,
        cv.musique,
        id
      ], (err: any, result: any) => {
        if(err) {
          reject(err);
        }
        resolve(result);
      })
    });
  }
  deleteOne(id: number) {
    return new Promise((resolve, reject) => {
      this.connexion.query('DELETE FROM cv WHERE id=?', [id], (err: any, result: any) => {
        if(err) reject(err)
        resolve(result);
      })
    })
  }
}