import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { SecondaryComponent } from './secondary/secondary.component';
import { PrimaryComponent } from './primary/primary.component';
import { PrimaryNestedComponent } from './primary-nested/primary-nested.component';
import { PrimaryContainerComponent } from './primary-container/primary-container.component';
import { ManagerContainerComponent } from './manager-container/manager-container.component';

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
          component: ManagerContainerComponent,
          children: [
            {
              path: '',
              component: PrimaryContainerComponent,
              children: [
                {
                  path: 'secondary',
                  outlet: 'sOutlet',
                  component: SecondaryComponent,
                },
                {
                  path: 'edit',
                  loadChildren: () =>
                    import('./primary/primary.module').then(
                      (m) => m.PrimaryModule
                    ),
                },
                {
                  path: 'nested',
                  component: PrimaryNestedComponent,
                },
              ],
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
