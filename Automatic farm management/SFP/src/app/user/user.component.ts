import { MatDialog } from '@angular/material/dialog';
import { UserPopupComponent } from './../user-popup/user-popup.component';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(UserPopupComponent);
}

  ngOnInit() {
  }

}
