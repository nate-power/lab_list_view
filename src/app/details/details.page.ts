import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  item = ""

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.item = this.route.snapshot.queryParamMap.get('name')
  }

}
