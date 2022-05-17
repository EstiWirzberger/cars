import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent implements OnInit {
  @Input() feild: any;
  textError = "error";
  constructor() { }

  ngOnInit(): void {
  }
  getErrorMessage() {
    return this.feild.hasError('required') ? 'You must enter a value' : '';

  }
}
