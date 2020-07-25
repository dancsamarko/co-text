import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Room } from '../room'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  docId: string;
  currentRoom: Room;
  room;
  id;
  text;

  constructor(
    private _router: Router,
    public firestoreService: AngularFirestore
  ) {

  }

  ngOnInit(): void {

  }

  createRoom(Room) {
    this.currentRoom = Room;
    return this.firestoreService.collection('rooms').add(Room).then(docRef => {this.docId = docRef.id}).then(this.getCreatedRoom);
  }

  getCreatedRoom = () => this.firestoreService.collection('rooms').doc(this.docId)
    .ref.get().then((doc) => {
    this.room = doc.data();
    this._router.navigate(['room/' + this.docId])
  });
  
  getRoom(id: string) {
    this.id = id;
    return this.firestoreService.collection('rooms').doc(id).ref.get().then((doc) => {
      this.room = doc.data();
    });
  }

  updateText(value: string) {
    this.room.text = this.firestoreService.collection('rooms').doc(this.id).valueChanges().subscribe((dbtext: any) => {
      this.room.text = dbtext.text;
    })
    return this.firestoreService.collection('rooms').doc(this.id).set({ text: value }, { merge: true });
    
  }

}
