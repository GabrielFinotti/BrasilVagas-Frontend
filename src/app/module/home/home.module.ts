import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes
import { HomeComponent } from 'src/app/pages/home/home.component';
import { CardVagaComponent } from 'src/app/components/card-vaga/card-vaga.component';
import { CardSpinnerComponent } from 'src/app/components/card-spinner/card-spinner.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    HomeComponent,
    CardVagaComponent,
    CardSpinnerComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HomeComponent,
    CardVagaComponent,
    CardSpinnerComponent
  ]
})
export class HomeModule { }
