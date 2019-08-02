

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { SweetalertComponent } from './sweetalert/sweetalert.component';



const routes: Routes = [
  { path: '',component:LoginComponent},
  { path: 'login',component: LoginComponent},
  { path: 'managedevice',component: ManagedeviceComponent},
  { path: 'register',component: RegisterComponent},
  { path: 'plot',component: PlotComponent},
  { path: 'edit',component: EditComponent},
  { path: 'addevice',component: AddeviceComponent},
  { path: 'admin',component: AdminComponent},
  { path: 'fertconfig',component: FertconfigComponent},
  { path: 'plant-data',component: PlantDataComponent},
  { path: 'plantconfig',component: PlantconfigComponent},
  { path: 'user',component: UserComponent},
  { path: 'watering',component: WateringComponent},
  { path: 'watering-result',component: WateringResultComponent},
  { path: 'plotmenu',component: PlotmenuComponent},
  { path: 'sweetalert',component: SweetalertComponent}
 
  
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
