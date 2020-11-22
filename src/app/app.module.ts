import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CriarPetComponent } from './criar-pet/criar-pet.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PetListComponent } from './pet-list/pet-list.component';
import { DetalhesPetComponent } from './detalhes-pet/detalhes-pet.component';
@NgModule({
  declarations: [
    AppComponent,
    CriarPetComponent,
    PetListComponent,
    DetalhesPetComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
