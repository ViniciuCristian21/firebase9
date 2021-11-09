import { Injectable } from '@angular/core';
import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc } from '@firebase/firestore';
import { db } from 'src/environments/environment';
import { Description } from './description';


@Injectable({
  providedIn: 'root'
})
export class FirebaseCrudService {
  allInfos: Description;
  all: any = [];
  userCollectionRef = collection(db, "data");
  constructor() {
    this.allInfos = new Description();
  }
  async getAll(){
    const snap = await getDocs(this.userCollectionRef);
    this.all = [];
    snap.forEach((cont) => {
      this.all.push({id: cont.id, description: cont.data().description })
    })
    console.log(this.all);

    return this.all;

  }
  async insertData(){
    await addDoc(this.userCollectionRef, {
      description: "Teste insert 1",
    });
  }
  async update(){
    const userDoc = doc(db, "data", "9yQ2WGAyXu3j30huvudy");
    const newDescription = {description: "teste update"};
    await updateDoc(userDoc, newDescription)
  }

  async delete(id){
    const userDoc = doc(db, "data", id);
    await deleteDoc(userDoc);
  }
}
