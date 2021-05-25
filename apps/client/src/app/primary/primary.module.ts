import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrimaryComponent } from './primary.component';

@NgModule({
  exports: [PrimaryComponent],
  declarations: [PrimaryComponent],
})
export class PrimaryModule {}
