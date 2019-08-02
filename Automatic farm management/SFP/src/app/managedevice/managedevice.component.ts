import { MatDialog } from '@angular/material/dialog';
import { ManagedevicePopupComponent } from './../managedevice-popup/managedevice-popup.component';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-managedevice',
  templateUrl: './managedevice.component.html',
  styleUrls: ['./managedevice.component.css']
})
export class ManagedeviceComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(ManagedevicePopupComponent);
}

  ngOnInit() {
  }

}
