import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services {

  services = [
    {
      name: 'Corte clásico',
      description: 'Corte personalizado según tu estilo.',
      price: 'S/ 25'
    },
    {
      name: 'Corte + Barba',
      description: 'Corte completo acompañado de perfilado de barba.',
      price: 'S/ 35'
    },
    {
      name: 'Fade',
      description: 'Degradado preciso y acabado profesional.',
      price: 'S/ 30'
    },
    {
      name: 'Barba',
      description: 'Perfilado y definición de barba.',
      price: 'S/ 20'
    }
  ];

}
