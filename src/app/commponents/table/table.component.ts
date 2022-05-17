import { Component, OnInit } from '@angular/core';
import { PotentialBuyerDetails } from 'src/app/Interfaces/potential-buyer-details';
import { MainServiceService } from 'src/app/services/main-service.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = [];
  dataSource: any;
  constructor(public mainService: MainServiceService) { }

  ngOnInit(): void {
    this.mainService.potentialBuyers = JSON.parse(localStorage.getItem(this.mainService.potentialBuyersString)!)
    this.mainService.potentialBuyers
    this.displayedColumns = ['fullName', 'dateOfBirth', 'email', 'gender', 'address', 'amountSeats', 'city', 'country', 'amountSeats', 'listHobbies', 'motorType']
    this.dataSource = this.mainService.potentialBuyers;
  }

}
