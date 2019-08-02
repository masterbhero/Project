import { PlotPopupComponent } from './../plot-popup/plot-popup.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(PlotPopupComponent);
}


  ngOnInit() {
  }

}
