import { Component, OnInit } from '@angular/core';

import { skills } from '../constants/skills';
import { Skill } from '../interfaces/skills';
import { SearchKeywordsService } from '../services/search-keywords.service';

@Component({
  selector: 'app-photo-skills',
  templateUrl: './photo-skills.component.html',
  styleUrls: ['./photo-skills.component.css']
})
export class PhotoSkillsComponent  implements OnInit {
  
  skills: Skill[];
  searchParams;

  constructor(private __searchSvc: SearchKeywordsService){
    this.skills = skills;
    this.searchParams = [];
  }

  trackBySkillId(index: number, skill: Skill) : number { return skill.id; }
  
  async ngOnInit () {
    let searchRecord = await this.__searchSvc.getSearchKeywords();
    if(searchRecord) {
      this.searchParams = searchRecord['search_query'].split(" ");
    }
  }

  highlight(skillName: never) {
      if (this.searchParams.length === 0 ) {
        return 1;
      }
        
      if(this.searchParams.indexOf(skillName) > -1) {
        return 1;
      } else {
        return 0.3;
      }
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/