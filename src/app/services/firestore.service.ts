import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }

  createDoc(data: any, path: string, id: string){
    const collection = this.firestore.collection(path);
    return collection.doc(id).set(data);
  }
  
  createEstudiante(){
    this.firestore.collection('estudiantes')
  }
  updateDoc(data: any, path: string, id: string){
    const collection = this.firestore.collection(path);
    return collection.doc(id).update(data);
  }
  getId(){
    return this.firestore.createId();
  }
  
  getCollection<notificacion>(path: string){
    const collection = this.firestore.collection<notificacion>(path);
    return collection.valueChanges();
  }

  getDoc<tipo>(path: string, id: string) {
    return this.firestore.collection(path).doc<tipo>(id).valueChanges()
   }
}
