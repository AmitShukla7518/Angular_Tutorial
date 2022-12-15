import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesTestComponent } from './directives-test/directives-test.component';
import { RedElDirective } from './red-el.directive';



@NgModule({
  declarations: [
    DirectivesTestComponent,
    RedElDirective
  ],
  imports: [
    CommonModule,
    
  ],
  exports:[DirectivesTestComponent]
})
export class DirectivesModulesModule { }
