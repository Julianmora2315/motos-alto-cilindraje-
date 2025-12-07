import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header';
import { FooterComponent } from '../../components/footer/footer';

@Component({
  selector: 'app-kawasaki',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './kawasaki.html',
  styleUrl: './kawasaki.css'
})
export class KawasakiComponent {
  motos = [
    { 
      modelo: 'Ninja ZX-10R', 
      cilindraje: '998cc', 
      precio: '$80,000,000', 
      potencia: '203 HP',
      descripcion: 'Superbike de pista con tecnología WSBK',
      imagen: 'https://www.cycleworld.com/resizer/CQy28yBCyL-BM4fZaIMX-TIkJwE=/1440x0/filters:focal(NaNxNaN:NaNxNaN)/cloudfront-us-east-1.images.arcpublishing.com/octane/UCMNJ4R7ZBHE5GYCGCIERAWWPM.jpg'
    },
    { 
      modelo: 'Z900', 
      cilindraje: '948cc', 
      precio: '$48,000,000', 
      potencia: '125 HP',
      descripcion: 'Naked agresiva con diseño Sugomi',
      imagen: 'https://lamoto.com.ar/wp-content/uploads/2020/01/kawa-z900.jpg'
    },
    { 
      modelo: 'Ninja 400', 
      cilindraje: '399cc', 
      precio: '$28,000,000', 
      potencia: '49 HP',
      descripcion: 'Deportiva ligera perfecta para iniciar',
      imagen: 'https://ridermagazinereviews.com/wp-content/uploads/2019/12/2018-Kawasaki-Ninja-400.jpg'
    },
    { 
      modelo: 'Ninja H2', 
      cilindraje: '998cc', 
      precio: '$150,000,000', 
      potencia: '231 HP',
      descripcion: 'Hypersport sobrealimentada, la más extrema',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1SttN3Gh29SOWYDxtrw_nGtIPoxQjEbQvQg&s'
    },
    { 
      modelo: 'Z650', 
      cilindraje: '649cc', 
      precio: '$35,000,000', 
      potencia: '68 HP',
      descripcion: 'Naked versátil ideal para ciudad y carretera',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShkMMjOt589sviJcmlQLWh0_jfopkJKGO3aA&s'
    },
    { 
      modelo: 'Ninja ZX-6R', 
      cilindraje: '636cc', 
      precio: '$60,000,000', 
      potencia: '128 HP',
      descripcion: 'Supersport de media cilindrada dominante en pista',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV20CQIsVugrt0OKEDB2FliacfqMsb-GTicw&s'
    }
  ];
}