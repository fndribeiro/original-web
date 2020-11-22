import { DetalhesPetComponent } from './detalhes-pet/detalhes-pet.component';
import { PetListComponent } from './pet-list/pet-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CriarPetComponent } from './criar-pet/criar-pet.component';

const routes: Routes = [
  { path: '', redirectTo: 'pets', pathMatch: 'full' },
  { path: 'pets', component: PetListComponent },
  { path: 'criar', component: CriarPetComponent },
  { path: 'detalhes/:id', component: DetalhesPetComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
