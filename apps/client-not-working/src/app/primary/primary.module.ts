import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrimaryComponent } from './primary.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: PrimaryComponent,
      },
    ]),
  ],
  exports: [RouterModule],
  declarations: [PrimaryComponent],
})
export class PrimaryModule {}
