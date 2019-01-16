import { ViewTemplateService } from './services/view-template.service';
import { MainView } from './models/main-view';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { GenericComponent } from './generic/generic.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'solution';
  subscription: Subscription;

  constructor(templateService: ViewTemplateService, router: Router) {
    // get mainview template
     this.subscription = templateService.getViewTemplate('mainview').subscribe((data: MainView) => {
      this.menu = data;
      if (data && data.menu) {
        // dynamically add path to routes
        router.config = data.menu.map(m => {
          return {
            component: GenericComponent,
            path: m.name,
            data: {
              path: m.name
            }
          };
        });
      }
    });
  }

  public menu: MainView;

  ngOnInit() {
  }

  ngOnDestroy() {
    // prevent memory leak
    this.subscription.unsubscribe();
  }
}
