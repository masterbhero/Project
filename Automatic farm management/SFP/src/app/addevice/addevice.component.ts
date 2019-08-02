import { MatDialog } from '@angular/material/dialog';
import { AddevicePopupComponent } from './../addevice-popup/addevice-popup.component';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-addevice',
  templateUrl: './addevice.component.html',
  styleUrls: ['./addevice.component.css']
})
export class AddeviceComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(AddevicePopupComponent);
}


  ngOnInit() {
  }

}
