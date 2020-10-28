import { Component, OnInit } from '@angular/core';
import { IEducation } from '../shared/icandidate';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  education: IEducation;
  constructor() { }

  ngOnInit(): void {
    
  }

}
