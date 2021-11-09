import { FirebaseCrudService } from './../../shared/firebase-crud.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  constructor(private firebaseCrudService: FirebaseCrudService) { }

  ngOnInit() {
  }
  async list(){
    await this.firebaseCrudService.getAll();
  }
  async insert(){
    await this.firebaseCrudService.insertData();
  }
  async update(){
    await this.firebaseCrudService.update();
  }
  async delete() {
    await this.firebaseCrudService.delete("UM7mGOQ17qG7uxJWdgL1");
  }

}
