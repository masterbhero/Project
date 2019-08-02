import { MatDialog } from '@angular/material/dialog';
import { PlotPopupComponent } from './../plot-popup/plot-popup.component';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-plot',
  templateUrl: './plot.component.html',
  styleUrls: ['./plot.component.css']
})
export class PlotComponent implements OnInit {

plot: any;
  constructor(public dialog: MatDialog) {
    this.plot = {
            name:[
              'แปลงที่ 1 : ผักโขม',
              'แปลงที่ 2 : ต้นหอม',
              'แปลงที่ 3 : กะหล่ำปลี',
              'แปลงที่ 4 : ผักกาด',
              'แปลงที่ 5 : ผักชี',
              'แปลงที่ 6 : ผักบุ้ง',
              'แปลงที่ 7 : คะน้า',
              'แปลงที่ 8 : แตงกวา',
            ]
          }
   }
  
    openDialog() {
      this.dialog.open(PlotPopupComponent);
}
  

  ngOnInit() {
  }

}
