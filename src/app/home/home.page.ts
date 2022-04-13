import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  element: any;
  elementList = [];

  constructor(private storage: Storage) {}

  async ngOnInit() {
    await this.storage.create();
    this.getAllElements()
  }

  addElement = async () => {
    await this.storage.set(Date.now().toString(), this.element);
    this.elementList.push({
      key: Date.now().toString(),
      value: this.element
    })
    this.element = ""
    this.getAllElements();
  }

  getAllElements = () => {
    this.elementList = []
    this.storage.forEach((value, key) => {
      this.elementList.push({
        key: key,
        value: value
      })
    })
    console.log(this.elementList)
  }

  removeElement = async (key: string) => {
    await this.storage.remove(key)
    .then(() => {
      this.getAllElements()
    })
    
  }
}
