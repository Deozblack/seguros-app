import { Directive, Input, ViewContainerRef, inject } from '@angular/core';
import { ComponentsService } from '../core/services/components.service';
import { ComponentData } from '../core/interfaces/response.interface';
import { HomeService } from '../core/services/home.service';

@Directive({
  selector: '[appComponentDynamic]'
})
export class ComponentDynamicDirective {

  private viewContainerRef = inject(ViewContainerRef);
  private componentService = inject(ComponentsService);
  private homeService = inject(HomeService);

  private $componentsList!:any[];

  @Input() set componentsList( value:any[] ){
    this.$componentsList = value
    this.getComponents();
  }
  
 
  ngOnInit(): void {
  }
  
  getComponents(){
    this.componentService.generateComponents(this.viewContainerRef,this.$componentsList)
  }

}
