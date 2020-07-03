import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgStyle}  from "@angular/common";
import { bk_imgs} from '../constants/header-background-images';
import { SearchKeywordsService } from '../services/search-keywords.service';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent implements OnInit,OnDestroy {
  title;
  backGroundImage;
  backGroundImageArrayIndex = 1;
  backGroundImagesArray = [];
  subscription : Subscription;
  source = interval(5000);
  

  constructor(private __searchSvc: SearchKeywordsService) { 
    this.title = 'Story Tellers';
  }
  
  changeBackgroundImage() {

    if(this.backGroundImageArrayIndex < this.backGroundImagesArray.length) {
      this.backGroundImage = this.backGroundImagesArray[this.backGroundImageArrayIndex].link;
    }

    if(this.backGroundImageArrayIndex === this.backGroundImagesArray.length - 1){
      this.backGroundImageArrayIndex = 0;
    } else {
      this.backGroundImageArrayIndex = this.backGroundImageArrayIndex + 1;
    }
  }

  getBackGroundImage() {
    return `linear-gradient(rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)), url(${this.backGroundImage})`;
  }

  async ngOnInit () {
    let searchRecord = await this.__searchSvc.getSearchKeywords();
    this.filterBackGroundImages(searchRecord);
    this.subscription = this.source.subscribe( value => this.changeBackgroundImage())
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  filterBackGroundImages(searchRecord) {

    let searchParams = [];
    if(searchRecord) {
      searchParams = searchRecord['search_query'].split(" ");
    }

    if(searchParams.length > 0) {
      
       for (let bkImg of bk_imgs) {
         let imgMeta = bkImg['meta'];
         for ( let element of imgMeta ) {
           if (searchParams.indexOf(element) > -1) {
             this.backGroundImagesArray.push(bkImg)
             this.backGroundImage = bkImg['link'];
           }
         }
       }
    } else {
      this.backGroundImagesArray = bk_imgs;
      this.backGroundImage = bk_imgs[0].link;
    }
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/