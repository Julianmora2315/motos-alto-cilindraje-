// suzuki.component.ts
import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header';
import { FooterComponent } from '../../components/footer/footer';

@Component({
  selector: 'app-suzuki',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './suzuki.html',
  styleUrl: './suzuki.css'
})
export class SuzukiComponent {
  motos = [
    { 
      modelo: 'GSX-R1000R', 
      cilindraje: '999cc', 
      precio: '$85,000,000', 
      potencia: '202 HP',
      descripcion: 'Superbike legendaria con tecnología MotoGP',
      imagen: 'https://i.blogs.es/09f956/suzuki-gsx-r-1000-phantom-2022-013/840_560.jpeg'
    },
    { 
      modelo: 'GSX-S1000', 
      cilindraje: '999cc', 
      precio: '$55,000,000', 
      potencia: '152 HP',
      descripcion: 'Naked deportiva con carácter agresivo',
      imagen: 'https://www.suzuki.com.co/sites/default/files/2021-04/GSXS1000%20Foto%201.jpg'
    },
    { 
      modelo: 'V-Strom 1050', 
      cilindraje: '1037cc', 
      precio: '$68,000,000', 
      potencia: '107 HP',
      descripcion: 'Adventure confiable para largos viajes',
      imagen: 'https://e1.pxfuel.com/desktop-wallpaper/78/70/desktop-wallpaper-32-great-suzuki-v-strom-2019-with-suzuki-v-strom-2019-suzuki-v-strom.jpg'
    },
    { 
      modelo: 'Hayabusa', 
      cilindraje: '1340cc', 
      precio: '$110,000,000', 
      potencia: '190 HP',
      descripcion: 'La hyper sport más icónica y veloz',
      imagen: 'https://e0.pxfuel.com/wallpapers/625/173/desktop-wallpaper-suzuki-hayabusa-hayabusa-motorcycle-thumbnail.jpg'
    },
    { 
      modelo: 'GSX-R750', 
      cilindraje: '750cc', 
      precio: '$65,000,000', 
      potencia: '148 HP',
      descripcion: 'Deportiva equilibrada, la perfecta supersport',
      imagen: 'https://e1.pxfuel.com/desktop-wallpaper/34/748/desktop-wallpaper-black-suzuki-gsx-suzuki-750.jpg'
    },
    { 
      modelo: 'SV650', 
      cilindraje: '645cc', 
      precio: '$35,000,000', 
      potencia: '76 HP',
      descripcion: 'Naked ligera y divertida, perfecta para todos',
      imagen: 'https://www.motoplanete.com/suzuki/zoom-700px/10751-SV-650-2025-1000px.webp'
    }
  ];
}