import { Injectable } from '@angular/core';
import { Hobby } from '../Interfaces/hobby';
import { PotentialBuyerDetails } from '../Interfaces/potential-buyer-details';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {
  potentialBuyers:PotentialBuyerDetails[]=[];

  potentialBuyersString:string='';
  listOfHobbies:Hobby[]=[]

  constructor() { }
}
