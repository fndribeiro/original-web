import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Pet } from '../model/pet.model';
import { PetService } from '../service/pet.service';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {

  pets: Observable<Pet[]>;

  constructor(private petService: PetService, private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(): void {
    this.petService.getPetlist().subscribe(data => {
      this.pets = data;
    });
  }

  removerPet(id: number): void {
    this.petService.removerPet(id)
      .subscribe(data => {
          console.log(data);
          this.reloadData();
      });
  }

  detalhesDoPet(id: number): void {
    this.router.navigate(['detalhes', id]);
  }

}
