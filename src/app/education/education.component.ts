import { Component, OnInit, Input } from '@angular/core';
import { IResume } from '../shared/icandidate';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  @Input() resume:IResume
  constructor() { }

  ngOnInit(): void {
  }

}
