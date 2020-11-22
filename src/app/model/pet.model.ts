import { SexoPet } from './sexoPet.enum.model';
import { TipoPet } from './tipoPet.enum.model';

export class Pet {

  id: number;
  nome: string;
  sexoPet: SexoPet;
  tipoPet: TipoPet;
  castrado: boolean;
  imageUrl: string;

}
