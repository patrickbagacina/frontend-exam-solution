import { ViewTemplateService } from './services/view-template.service';
import { MainView } from './models/main-view';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GenericComponent } from './generic/generic.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'solution';

  constructor(templateService: ViewTemplateService, router: Router) {
    // dynamically add to routes
    templateService.getViewTemplate('mainview').subscribe((data: MainView) => {
      this.menu = data;
      if (data && data.menu) {
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
}
