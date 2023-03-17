import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { MatCardModule } from '@angular/material/card';
import { RegisterComponent } from './register/register.component';
import { SeeAllComponent } from './see-all/see-all.component';

@NgModule({
  declarations: [
    HomeComponent,
    RegisterComponent,
    SeeAllComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatCardModule

  ]
})
export class PagesModule { }
