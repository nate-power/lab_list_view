import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  value = ""

  constructor(private route: ActivatedRoute, private storage: Storage, private router: Router) { }

  ngOnInit() {
    this.value = this.route.snapshot.queryParamMap.get('value')
  }
  

}
