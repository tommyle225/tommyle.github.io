import { Component, OnInit, Input } from '@angular/core';
import { IResume, ICandidate } from '../shared/icandidate'
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {


  @Input() resume: IResume;
  constructor() { }

  ngOnInit(): void {
    
  }

}
