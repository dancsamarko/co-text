import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';


@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.sass']
})
export class TextComponent implements OnInit {

  room;
  roomId: string;
  roomText: string;

  constructor(
    private route: ActivatedRoute,
    public crudService: CrudService
    ) { }

  ngOnInit(): void {
    this.getRoom();
    this.connect();
  }

  onKey(value: string) {
    this.crudService.updateText(value);
  }

  getRoom() {
    const id = this.route.snapshot.paramMap.get('id');
    this.roomId = id;
    this.crudService.getRoom(id).then(this.room = this.crudService.room);
  }

  connect() {
    this.room.text = this.crudService.firestoreService.collection('rooms').doc(this.crudService.id).valueChanges().subscribe((dbtext: any) => {
      this.roomText = dbtext.text;
    })
  }

}
