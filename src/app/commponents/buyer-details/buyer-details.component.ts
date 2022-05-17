import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { Hobby } from 'src/app/Interfaces/hobby';
import { PotentialBuyerDetails } from 'src/app/Interfaces/potential-buyer-details'
import { MatDialog } from '@angular/material/dialog';
import { MainServiceService } from 'src/app/services/main-service.service';

@Component({
  selector: 'app-buyer-details',
  templateUrl: './buyer-details.component.html',
  styleUrls: ['./buyer-details.component.scss']
})

export class BuyerDetailsComponent implements OnInit {
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  hobbies: Hobby[] = [];
  email = new FormControl('', [Validators.required, Validators.email]);
  fullName = new FormControl('', [Validators.required]);
  gender = new FormControl('', [Validators.required]);
  dateOfBirth = new FormControl('', [Validators.required],);
  address = new FormControl('', [Validators.required]);
  city = new FormControl('', [Validators.required]);
  country = new FormControl('', [Validators.required]);
  listHobbies = new FormControl('', [Validators.required]);
  amountSeats = new FormControl('', [Validators.required, Validators.min(2), Validators.max(7)]);
  motorType = new FormControl('', [Validators.required])
  potentialBuyer: PotentialBuyerDetails = {
    email: this.email.value,
    fullName: this.fullName.value,
    gender: this.gender.value,
    dateOfBirth: this.dateOfBirth.value,
    address: this.address.value,
    city: this.city.value,
    country: this.country.value,
    listHobbies: JSON.stringify(this.hobbies),
    amountSeats: this.amountSeats.value,
    motorType: this.motorType.value,
  }

  constructor(public dialog: MatDialog, public mainServiceService: MainServiceService) { }

  ngOnInit(): void {
  }
  //save button
  save() {
    this.addToPotentialBuyers(this.email.value, this.fullName.value, this.gender.value,
      this.dateOfBirth.value, this.address.value, this.city.value, this.country.value,
      JSON.stringify(this.hobbies), this.amountSeats.value.toString(), this.motorType.value);
    this.dialog.open(DialogElementsExampleDialog);
  }
  // add To the array PotentialBuyers
  addToPotentialBuyers(email: string, fullName: string, gender: string, dateOfBirth: string, address: string,
    city: string, country: string, listHobbies: string, amountSeats: string, motorType: string) {
    var PotentialBuyer: PotentialBuyerDetails = {
      email: email,
      fullName: fullName,
      gender: gender,
      dateOfBirth: dateOfBirth,
      address: address,
      city: city,
      country: country,
      listHobbies: listHobbies,
      amountSeats: amountSeats,
      motorType: motorType,
    }
    if (localStorage.getItem(this.mainServiceService.potentialBuyersString)) {
      this.mainServiceService.potentialBuyers = JSON.parse(localStorage.getItem(this.mainServiceService.potentialBuyersString)!)
    }
    if (!this.mainServiceService.potentialBuyers[0]) {
      this.mainServiceService.potentialBuyers[0] = PotentialBuyer;
    }
    else
      this.mainServiceService.potentialBuyers.push(PotentialBuyer);
    localStorage.setItem(this.mainServiceService.potentialBuyersString, JSON.stringify(this.mainServiceService.potentialBuyers));
  }
  // error Email
  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  // error AmountSeats
  getAmountSeatsErrorMessage() {
    if (this.amountSeats.hasError('required')) {
      return 'You must enter a value';
    }
    else
      if (this.amountSeats.hasError('max'))
        return 'Max Of seats: 7';
    return this.amountSeats.hasError('min') ? 'Min Of seats: 2' : '';
  }
  // add hobby
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our hobby
    if (value) {
      this.hobbies.push({ name: value });
    }

    // Clear the input value
    event.chipInput!.clear();
  }
  // delete hobby 
  remove(hobby: Hobby): void {
    const index = this.hobbies.indexOf(hobby);

    if (index >= 0) {
      this.hobbies.splice(index, 1);
    }
  }
}
@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
})
export class DialogElementsExampleDialog { }
