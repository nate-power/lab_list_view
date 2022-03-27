import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  itemList = ["Item 1", "Item 2", "Item 3", "Item 4"]

  constructor() {}


}
