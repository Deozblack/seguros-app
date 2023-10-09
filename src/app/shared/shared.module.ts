import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentDynamicDirective } from './component-dynamic.directive';
import { LoaderComponent } from './loader/loader.component';
import { ModalComponent } from './modal/modal.component';
import { SetMessageDirective } from './set-message.directive';
import { SetHtmlDirective } from './set-html.directive';



@NgModule({
  declarations: [
    ComponentDynamicDirective,
    LoaderComponent,
    ModalComponent,
    SetMessageDirective,
    SetHtmlDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ComponentDynamicDirective,
    LoaderComponent,
    SetHtmlDirective,
    SetMessageDirective
  ]
})
export class SharedModule { }
