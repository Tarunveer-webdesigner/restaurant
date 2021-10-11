import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'restaurant';
  uservisible:boolean = false;
  ngOnInit() {}
  constructor() {}

  datashow(){
    this.uservisible = true;
  }
 
}
