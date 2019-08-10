import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// boton y check
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }
