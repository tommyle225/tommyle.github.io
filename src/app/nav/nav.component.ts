import { Component, OnInit, Input } from '@angular/core';
import { IResume } from '../shared/icandidate';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @Input() resume:IResume;
  constructor() { }

  ngOnInit(): void {
  }

}
