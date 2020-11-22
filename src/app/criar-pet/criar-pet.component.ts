import { PetService } from './../service/pet.service';
import { Pet } from './../model/pet.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pet',
  templateUrl: './criar-pet.component.html',
  styleUrls: ['./criar-pet.component.css']
})
export class CriarPetComponent implements OnInit {

  pet: Pet = new Pet();

  constructor(private petService: PetService, private router: Router) { }

  ngOnInit(): void {
  }

  novoPet(): void {
    this.pet = new Pet();
  }

  salvar(): void {
    this.petService.criarPet(this.pet).subscribe(data => {
      console.log(data);
      this.pet = new Pet();
      this.listarPets();
    });
  }

  listarPets(): void {
    this.router.navigate(['/pets']);
  }

  onSubmit(): void {
    this.salvar();
  }

}
