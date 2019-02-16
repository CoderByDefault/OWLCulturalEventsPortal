import { Component, OnInit } from '@angular/core';
import {Item} from '../item';

import { DataService} from '../data.service';
@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css'],
  providers: [DataService]
})
export class EventItemComponent implements OnInit {

  eventItemList: Item[]=[];

  constructor(private dataService: DataService) { }

  
  getItems(){
    //calls method in data service class to fetch data

    this.dataService.getEventItems()
    .subscribe((items:Item[]) => {
      this.eventItemList = items;
      //console.log('data from data service: '+ this.eventItemList[0].Title);
    });
  }
  ngOnInit() {
    this.getItems();
  }

}
