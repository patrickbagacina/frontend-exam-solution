import { CardComponent } from './../card/card.component';
import { ViewComponent } from './../view-component';
import { DisplayDataDirective } from './../display-data.directive';
import { ViewTemplateService } from './../services/view-template.service';
import { Component, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { ViewDataService } from '../services/view-data.service';
import { forkJoin, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-generic',
  templateUrl: './generic.component.html',
  styleUrls: ['./generic.component.scss']
})
export class GenericComponent implements OnInit, OnDestroy {
  public viewTemplate: any;
  public data: any;
  subcription: Subscription;
  @ViewChild(DisplayDataDirective) appDisplayData: DisplayDataDirective;

  constructor(
    private templateService: ViewTemplateService,
    private viewDataService: ViewDataService,
    private route: ActivatedRoute,
    private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    // get path from params
    this.subcription = this.route.data.subscribe(v => {
      // get template and data from json at the same time
      forkJoin(
        this.templateService.getViewTemplate(v.path),
        this.viewDataService.getViewData(v.path)
      ).subscribe(data => {
        this.viewTemplate = data[0];
        this.data = data[1];
        this.loadDisplay();
      }, error => {
        // TODO: Render error
        console.log(error);
      });
    });
  }

  // render components dynamically
  loadDisplay() {
    if (this.viewTemplate) {
      // create instance of component
      const newComponent = this.componentFactoryResolver.resolveComponentFactory(
        this.resolveComponent(this.viewTemplate.type)
      );
      // clear viewContainerRef
      const viewContainerRef = this.appDisplayData.viewContainerRef;
      viewContainerRef.clear();

      // add new instance to ViewContainerRef
      const componentInstance = <ViewComponent> viewContainerRef.createComponent(newComponent).instance;

      // pass template and data to component instance
      componentInstance.viewTemplate = this.viewTemplate;
      componentInstance.data = this.data;
    }
  }

  // get equivalent component from type string
  resolveComponent(type: string) {
    switch (type) {
      case 'card': return CardComponent;
      default: return TableComponent;
    }
  }

  // prevent memory leak
  ngOnDestroy() {
    this.subcription.unsubscribe();
  }
}
