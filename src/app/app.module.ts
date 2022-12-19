import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { UserAuthModule } from './user-auth/user-auth.module';
import { FormsModule } from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FavoriteComponent } from './Assignemnts/favorite.component';
import { PipesTutComponent } from './pipes-tut/pipes-tut.component';
import { DirectivesModulesModule } from './directives-modules/directives-modules.module';
import { ReactiveFormModule } from './reactive-form/reactive-form.module';
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    StudentsListComponent,
    TeacherListComponent,
    FavoriteComponent,
    PipesTutComponent,
    
    
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserAuthModule,
    FormsModule,
    NgbModule,
    DirectivesModulesModule,
    ReactiveFormModule
   
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
