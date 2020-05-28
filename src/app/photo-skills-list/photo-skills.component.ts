import { Component } from '@angular/core';

import { skills } from '../skills';

@Component({
  selector: 'app-photo-skills',
  templateUrl: './photo-skills.component.html',
  styleUrls: ['./photo-skills.component.css']
})
export class PhotoSkillsComponent {
  skills = skills;

  enquire() {
    window.alert('We will get back to you shortly...');
  }

  onNotify() {
    window.alert("Your booking is confirmed")
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/