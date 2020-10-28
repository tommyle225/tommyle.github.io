export interface ICandidate {
    firstName: string;
    lastName: string;
    address1: string;
    city: string;
    state: string;
    zip: number;
    email: string;
    fullName?:()=>  string;
    
}

export interface IEducation{
    year: number;
    degree: string;
    school: string;
    location: string;
}

export interface IExperience{
    title: string;
    company: string;
    date: string;
    location: string;
    description: string
}

export interface IResume{
    person: ICandidate;
    summary: string;
    education: IEducation;
    experiences: IExperience[];
    skills: string[]
}

export class Candidate implements ICandidate
{
    
    firstName: string;    
    lastName: string;
    address1: string;
    city: string;
    state: string;
    zip: number;
    email: string;
    fullName(): string{
        return this.firstName + ' ' + this.lastName;
    }
}