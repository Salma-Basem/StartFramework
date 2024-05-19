import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { MainBodyComponent } from './Components/main-body/main-body.component';
import { PortofilloComponent } from './Components/portofillo/portofillo.component';
import { ContactComponent } from './Components/contact/contact.component';

const routes: Routes = [
  {path:'',component:MainBodyComponent},
  {path:'about',component:AboutComponent},
  {path:'portofillo',component:PortofilloComponent},
  {path:'contact',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
