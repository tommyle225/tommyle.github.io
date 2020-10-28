import { Injectable } from '@angular/core';
import { IResume, IEducation } from './shared/icandidate';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor() { }

  GetResume(): IResume
  {
    return {summary: 'summary11111', experiences: [], person: { firstName: 'Tommy', lastName: 'Le', address1: '9573 Victory Ln', city:'Denham Springs',state:'LA',email:'tommyle225@gmail.com',zip: 70769}, skills:[], education: this.GetEducation() };
  }

  private GetEducation(): IEducation{
    return {
      degree: 'Bachelor of Science, Computer Science', 
      location:'Lafayette, LA', 
      school:'ULL', 
      year: 2003
    }
  }
}
