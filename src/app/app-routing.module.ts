import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routes } from 'src/modules/routes/routes';

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
