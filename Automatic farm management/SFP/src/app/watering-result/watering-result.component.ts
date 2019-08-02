import { MatDialog } from '@angular/material/dialog';
import { ExamplepopupComponent } from './../examplepopup/examplepopup.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-watering-result',
  templateUrl: './watering-result.component.html',
  styleUrls: ['./watering-result.component.css']
})
export class WateringResultComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

    openDialog(){
      this.dialog.open(ExamplepopupComponent);
    }

  ngOnInit() {
  }

}
