export interface Person {
    firstName: string; //'?' means optional 
    lastName: string;
    age: number;
    nationality?: string;
    gender: string;
}

export interface User {
    id? : number;
    name : string;
    username : string;
    email : string;
    address : [{
      street : string; 
      suite : string;
      city : string;
      zipcode : number;
      geo : {
        lat : number;
        lng : number;
      }
    }];
    phone : string;
    website : string;
    company : [{
      name : string;
      catchPhrase : string;
      bs : string;
    }];
}