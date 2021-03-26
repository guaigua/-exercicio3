import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RespotasComponent } from './componentes/respotas/respotas.component';
import { SearchComponent } from './componentes/search/search.component';

const routes: Routes = [
  { path: '', redirectTo:'search', pathMatch:'full'},
  { path: 'search', component:SearchComponent },
  { path: 'respostas/:procurar', component: RespotasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [SearchComponent] 