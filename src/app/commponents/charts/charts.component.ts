import { Component, OnInit } from '@angular/core';
import { ChartDataset } from 'chart.js';
import { PotentialBuyerDetails } from 'src/app/Interfaces/potential-buyer-details';
import { MainServiceService } from 'src/app/services/main-service.service';
import { Hobby } from 'src/app/Interfaces/hobby';

export declare type SingleLineLabel = string;
export declare type MultiLineLabel = string[];
export declare type Label = SingleLineLabel | MultiLineLabel;


@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartComponent implements OnInit {
  quantity = 0;

  // for Motor Chart
  public barChartLabelsMotorType: Label[] = ['electric', 'fuel'];
  public barMotorChartData: ChartDataset[] = [];
  maleElectricMotor = 0;
  malefuelMotor = 0;
  femaleElectricMotor = 0;
  femalefuelMotor = 0;
  quantityMale = 0;
  quantityFemale = 0;

  // for Amount Seats Chart
  public barChartLabelsAmountSeatsType: Label[] = [''];
  public barAmountSeatsChartData: ChartDataset[] = [];
  twoSeats = 0;
  threeSeats = 0;
  fourSeats = 0;
  sixSeats = 0;
  sevenSeats = 0;
  fiveSeats = 0;

  // for Hobbies Chart
  public barChartLabelsHobbiesType: Label[] = [''];
  public barHobbiesChartData: ChartDataset[] = [];
  listOfHobbiesPrivate: Hobby[] = [];
  barChart: ChartDataset = {
    data: [0], label: ''
  }


  constructor(public mainService: MainServiceService) { }

  ngOnInit(): void {
    this.mainService.potentialBuyers = JSON.parse(localStorage.getItem(this.mainService.potentialBuyersString)!)
    if (this.mainService.potentialBuyers) {
      this.mainService.potentialBuyers.forEach(potentialBuyer => {
        this.motorChart(potentialBuyer);
        this.amountSeatsChart(potentialBuyer);
        this.hobbiesChart(potentialBuyer);
        this.quantity++;
      })
      this.buildCharts();
    }

  }
  // motor chart
  motorChart(potentialBuyer: PotentialBuyerDetails) {
    if (potentialBuyer.gender == 'male') {
      this.quantityMale++;
      if (potentialBuyer.motorType == 'Electric')
        this.maleElectricMotor++;
      else
        this.malefuelMotor++;
    }
    else {
      this.quantityFemale++;
      if (potentialBuyer.motorType == 'Electric')
        this.femaleElectricMotor++;
      else
        this.femalefuelMotor++;
    }
  }
  // amount seats chart
  amountSeatsChart(potentialBuyer: PotentialBuyerDetails) {
    switch (potentialBuyer.amountSeats) {
      case '2': {
        this.twoSeats++;
        break;
      }
      case '3': {
        this.threeSeats++;
        break;
      }
      case '4': {
        this.fourSeats++;
        break
      }
      case '5': {
        this.fiveSeats++;
        break
      }
      case '6': {
        this.sixSeats++;
        break
      }
      case '7': {
        this.sevenSeats++;
        break
      }
    }
  }
  // Hobbies chart
  hobbiesChart(potentialBuyer: PotentialBuyerDetails) {
    this.listOfHobbiesPrivate = JSON.parse(potentialBuyer.listHobbies!)
    this.listOfHobbiesPrivate.forEach(hobby => {
      this.ifExist(hobby);
    })
  }
  // is the hobby exist?
  ifExist(hobby: Hobby) {
    let ifFound = false;
    if (this.mainService.listOfHobbies[0]) {
      this.mainService.listOfHobbies.forEach(hobbyItem => {
        if (hobbyItem.name == hobby.name) {
          if (hobbyItem.quantity == undefined)
            hobbyItem.quantity = 1
          else
            hobbyItem.quantity++;
          ifFound = true;
        }
      })
      if (!ifFound) {
        hobby.quantity = 1;
        this.mainService.listOfHobbies.push(hobby);

      }
    }
    else {
      this.mainService.listOfHobbies[0] = hobby;
      this.mainService.listOfHobbies[0].quantity = 1

    }
  }
  // build the charts
  buildCharts() {
    // motor
    this.barMotorChartData = [
      { data: [100 / this.quantityFemale * this.femaleElectricMotor, 100 / this.quantityFemale * this.femalefuelMotor], label: 'female' },
      { data: [100 / this.quantityMale * this.maleElectricMotor, 100 / this.quantityMale * this.malefuelMotor], label: 'male' }
    ]
    // amount seats
    this.barAmountSeatsChartData = [
      { data: [100 / this.quantity * this.twoSeats], label: 'Two Seats' },
      { data: [100 / this.quantity * this.threeSeats], label: 'Three Seats' },
      { data: [100 / this.quantity * this.fourSeats], label: 'Four Seats' },
      { data: [100 / this.quantity * this.fiveSeats], label: 'Five Seats' },
      { data: [100 / this.quantity * this.sixSeats], label: 'SixS eats' },
      { data: [100 / this.quantity * this.sevenSeats], label: 'Seven Seats' }
    ]
    // hobbies
    this.mainService.listOfHobbies.forEach(hobby => {
      if (hobby.quantity == undefined)
        hobby.quantity = 0;
      this.barChart = {
        data: [hobby.quantity], label: hobby.name
      }
      this.barHobbiesChartData.push(this.barChart);
    })
  }
}
