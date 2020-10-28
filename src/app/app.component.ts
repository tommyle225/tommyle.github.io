import { Component,OnInit } from '@angular/core';
import { IResume, ICandidate, Candidate } from './shared/icandidate';
import { PortfolioService } from './portfolio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tommy Le';
  resume: IResume;

  constructor(private _portfolioService: PortfolioService) 
  {
  }

  ngOnInit(): void {
     this.resume = this._portfolioService.GetResume();
  }

}
