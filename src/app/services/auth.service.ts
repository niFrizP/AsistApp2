import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as firebase from 'firebase/compat';
import { User } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private authfirebase: AngularFireAuth, public ngFireAuth: AngularFireAuth) { }
 
  login(correo :string, password:string){
    return this.authfirebase.signInWithEmailAndPassword(correo, password)
  }
  logout(){
    this.authfirebase.signOut();
  }
  registro(datos:User){
    return this.authfirebase.createUserWithEmailAndPassword(datos.correo, datos.password);
  }
  stateUser(){
    return this.authfirebase.authState
  }
  PasswordRecover(passwordResetEmail: any){
    return this.ngFireAuth
    .sendPasswordResetEmail(passwordResetEmail)
    .then(() =>{
      window.alert(
        'Tu contraseña ha sido enviada, revisa tu correo.'
      );
    })
    .catch((error) => {
      window.alert(error);
    });
  }
  async getUid(){
    const User = await this.authfirebase.currentUser;
    if(User){
      return User.uid;
    }else
    { return null;}
  }
}
