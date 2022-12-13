import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { UserAuthModule } from './user-auth/user-auth.module';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    StudentsListComponent,
    TeacherListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserAuthModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
