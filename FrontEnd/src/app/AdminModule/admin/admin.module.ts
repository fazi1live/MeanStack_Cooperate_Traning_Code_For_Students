import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { DashBoardComponent } from '../components/DashBoard/dash-board/dash-board.component';
import { UsersComponent } from '../components/Users/users/users.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AdminComponent,
    DashBoardComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class AdminModule { }