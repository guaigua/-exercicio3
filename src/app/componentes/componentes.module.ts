import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { RespotasComponent } from './respotas/respotas.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [SearchComponent, RespotasComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    SearchComponent
  ]
})
export class ComponentesModule { }
