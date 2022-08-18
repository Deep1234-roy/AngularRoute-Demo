import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AboutcompanyComponent } from './aboutcompany/aboutcompany.component';
import { EmpaddComponent } from './empadd/empadd.component';
import { EmplistingComponent } from './emplisting/emplisting.component';
import { EmployeeComponent } from './employee/employee.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {component:HomeComponent,path:""},
  {component:AboutComponent,path:"About",children:[{component:AboutcompanyComponent,path:"company"}]},
  {component:EmployeeComponent,path:"Employee",children:[{component:EmplistingComponent,path:""},{component:EmpaddComponent,path:"Edit/:id"}]},
  {component:ErrorComponent,path:"**"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
