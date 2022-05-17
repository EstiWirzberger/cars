import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maim-page',
  templateUrl: './maim-page.component.html',
  styleUrls: ['./maim-page.component.scss']

})
export class MaimPageComponent implements OnInit {
  
  page= 'dashboard'

  constructor() { }

  ngOnInit(): void {
  }

}
