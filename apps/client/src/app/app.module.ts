import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { SecondaryComponent } from './secondary/secondary.component';
import { PrimaryComponent } from './primary/primary.component';
import { PrimaryNestedComponent } from './primary-nested/primary-nested.component';
import { PrimaryContainerComponent } from './primary-container/primary-container.component';
import { ManagerContainerComponent } from './manager-container/manager-container.component';
import { PrimaryModule } from './primary/primary.module';

@NgModule({
  declarations: [
    AppComponent,
    SecondaryComponent,
    PrimaryNestedComponent,
    PrimaryContainerComponent,
    ManagerContainerComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          component: PrimaryContainerComponent,
          children: [
            {
              path: '',
              component: PrimaryComponent,
            },
            {
              path: 'secondary',
              outlet: 'sOutlet',
              component: SecondaryComponent,
            },
          ],
        },
      ],
      {
        initialNavigation: 'enabled',
        scrollPositionRestoration: 'enabled',
        preloadingStrategy: PreloadAllModules,
        enableTracing: false,
        paramsInheritanceStrategy: 'always',
      }
    ),
    PrimaryModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
