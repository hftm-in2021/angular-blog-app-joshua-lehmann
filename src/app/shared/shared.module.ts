import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule, MatButtonModule],
  exports: [CommonModule, RouterModule, MatButtonModule],
})
export class SharedModule {}
