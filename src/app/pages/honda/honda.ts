// honda.component.ts
import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header';
import { FooterComponent } from '../../components/footer/footer';

@Component({
  selector: 'app-honda',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './honda.html',
  styleUrl: './honda.css'
})
export class HondaComponent {
  motos = [
    { 
      modelo: 'CBR1000RR-R', 
      cilindraje: '999cc', 
      precio: '$125,000,000', 
      potencia: '217 HP',
      descripcion: 'Superbike de competición con tecnología MotoGP',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTijD8p8lR2xNVcDx1_U832Nedk-VQUe4rNw&s'
    },
    { 
      modelo: 'CB650R', 
      cilindraje: '649cc', 
      precio: '$42,000,000', 
      potencia: '95 HP',
      descripcion: 'Naked deportiva con estilo Neo Sports Café',
      imagen: 'https://i.pinimg.com/564x/3e/a3/96/3ea396158705ad20926b1c81cbe64b27.jpg'
    },
    { 
      modelo: 'Africa Twin', 
      cilindraje: '1084cc', 
      precio: '$78,000,000', 
      potencia: '102 HP',
      descripcion: 'Adventure legendaria para todo terreno',
      imagen: 'https://motos.honda.com.co/images/cms/Africa-Twin-Tecnologia-web-1080x680-Honda-Multi.png'
    },
    { 
      modelo: 'CBR600RR', 
      cilindraje: '599cc', 
      precio: '$58,000,000', 
      potencia: '118 HP',
      descripcion: 'Supersport pura para pista y carretera',
      imagen: 'https://www.motofichas.com/images/phocagallery/Honda/cbr600rr-2024/11-honda-cbr650rr-2024-estudio-negro-01.jpg'
    },
    { 
      modelo: 'CB500F', 
      cilindraje: '471cc', 
      precio: '$32,000,000', 
      potencia: '47 HP',
      descripcion: 'Naked accesible perfecta para iniciarse',
      imagen: 'https://a.mcdn.es/mnet/contents/media/honda/cb_500_f/1138871.jpg'
    },
    { 
      modelo: 'Gold Wing', 
      cilindraje: '1833cc', 
      precio: '$140,000,000', 
      potencia: '126 HP',
      descripcion: 'Touring de lujo supremo para largos viajes',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5ORZwTqge7e6Lkvx5QaYiZsP1NdUGj-OFSQ&s'
    }
  ];
}