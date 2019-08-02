import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ManagedeviceComponent } from './managedevice/managedevice.component';
import { RegisterComponent } from './register/register.component';
import { PlotComponent } from './plot/plot.component';
import { EditComponent } from './edit/edit.component';
import { AddeviceComponent } from './addevice/addevice.component';
import { AdminComponent } from './admin/admin.component';
import { FertconfigComponent } from './fertconfig/fertconfig.component';
import { PlantDataComponent } from './plant-data/plant-data.component';
import { PlantconfigComponent } from './plantconfig/plantconfig.component';
import { UserComponent } from './user/user.component';
import { WateringComponent } from './watering/watering.component';
import { WateringResultComponent } from './watering-result/watering-result.component';
import { PlotmenuComponent } from './plotmenu/plotmenu.component';
import { ExamplepopupComponent } from './examplepopup/examplepopup.component';
import { RegisterPopupComponent } from './register-popup/register-popup.component';
import { EditPopupComponent } from './edit-popup/edit-popup.component';
import { AddevicePopupComponent } from './addevice-popup/addevice-popup.component';
import { ManagedevicePopupComponent } from './managedevice-popup/managedevice-popup.component';
import { UserPopupComponent } from './user-popup/user-popup.component';
import { PlotPopupComponent } from './plot-popup/plot-popup.component';
import { SweetalertComponent } from './sweetalert/sweetalert.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ManagedeviceComponent,
    RegisterComponent,
    PlotComponent,
    EditComponent,
    AddeviceComponent,
    AdminComponent,
    FertconfigComponent,
    PlantDataComponent,
    PlantconfigComponent,
    UserComponent,
    WateringComponent,
    WateringResultComponent,
    PlotmenuComponent,
    ExamplepopupComponent,
    RegisterPopupComponent,
    EditPopupComponent,
    AddevicePopupComponent,
    ManagedevicePopupComponent,
    UserPopupComponent,
    PlotPopupComponent,
    SweetalertComponent
 
  ],
  entryComponents:[
    ExamplepopupComponent,
    RegisterPopupComponent,
    EditPopupComponent,
    AddevicePopupComponent,
    ManagedevicePopupComponent,
    UserPopupComponent,
    PlotPopupComponent


  ],
  
 
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
