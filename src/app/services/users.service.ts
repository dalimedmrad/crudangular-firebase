import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


export interface Fil {
  Nom: string ;
}

@Injectable({
  providedIn: 'root'
})

export class UsersService {

 public erreur = false;

  constructor(public db: AngularFirestore) {}

  getUser(filKey) {
    return this.db.collection('users').doc(filKey).snapshotChanges();
  }

  async updateUser(filKey, nom, prenom,email) {

    await this.searchUserByEmail(nom).then( data => {

      if (data.empty) {
        this.db.collection('users').doc(filKey).set({nom: nom, prenom: prenom, email: email});
          this.erreur =  false;
          console.log(this.erreur);
      }else {
        this.erreur =  true ;
        console.log(this.erreur);
      }
});
  }

  deleteUser(filKey) {
    return this.db.collection('users').doc(filKey).delete();
  }
  afficherUser(filKey) {
    return this.db.collection('users').doc(filKey).get();
  }

  getUsers() {
    return this.db.collection('users').snapshotChanges();
  }
   searchUserByEmail(email) {
    return  this.db.firestore.collection('users').where('email', '==', email).get();
  }


  async createUser(value)  {

  await this.searchUserByEmail(value.email).then( data => {

          if (data.empty) {
            this.db.collection('users').add({nom: value.nom, prenom: value.prenom, email: value.email});
            
              this.erreur =  false;
              console.log(this.erreur);
          }else {
            this.erreur =  true ;
            console.log(this.erreur);
          }
    });
   }

}
