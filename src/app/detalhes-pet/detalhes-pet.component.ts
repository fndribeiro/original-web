import { PetService } from './../service/pet.service';
import { Pet } from './../model/pet.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalhes-pet',
  templateUrl: './detalhes-pet.component.html',
  styleUrls: ['./detalhes-pet.component.css']
})
export class DetalhesPetComponent implements OnInit {

  id: number;
  pet: Pet;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private petService: PetService) { }

  ngOnInit(): void {

    this.pet = new Pet();
    this.id = this.route.snapshot.params['id'];

    this.petService.getPet(this.id).subscribe(data => {
      console.log(data);
      this.pet = data;
    });
  }

  listarPets(): void {
    this.router.navigate(['pets']);
  }

  atualizarPet(): void {
    this.petService.atualizarPet(this.id, this.pet).subscribe(data => {
      console.log(data);
      this.pet = new Pet();
      this.listarPets();
    });
  }

  onSubmit(): void {
    this.atualizarPet();
  }

}
