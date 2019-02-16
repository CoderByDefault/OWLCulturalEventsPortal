import { Component, OnInit } from '@angular/core';
import {Item} from '../item';

import { DataService} from '../data.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css'],
  providers: [DataService]
})
export class BrowseComponent implements OnInit {

  eventItemList: Item[]=[];
  CategoryName: string;

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
