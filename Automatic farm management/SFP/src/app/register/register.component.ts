import { MatDialog } from '@angular/material/dialog';
import { RegisterPopupComponent } from './../register-popup/register-popup.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  
    openDialog() {
      this.dialog.open(RegisterPopupComponent);
  }

  ngOnInit() {
  }

}



