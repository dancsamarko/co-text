import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  user: string;
  room: string;

  constructor(public crudService: CrudService) { }

  ngOnInit(): void {
  }

  createRoom() {
    let Room = {};
    Room['user'] = this.user; 
    Room['room'] = this.room; 
    
    this.crudService.createRoom(Room).then(res => {
    }).catch(error => {
      console.log(error)
    });
  }
}
