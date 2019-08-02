import { MatDialog } from '@angular/material/dialog';
import { EditPopupComponent } from './../edit-popup/edit-popup.component';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(EditPopupComponent);
}



  ngOnInit() {
  }

}
