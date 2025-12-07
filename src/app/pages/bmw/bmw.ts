// bmw.component.ts
import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header';
import { FooterComponent } from '../../components/footer/footer';

@Component({
  selector: 'app-bmw',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './bmw.html',
  styleUrl: './bmw.css'
})
export class BmwComponent {
  motos = [
    {
      modelo: 'G310R',
      cilindraje: '313cc',
      precio: '$25,000,000',
      potencia: '34 HP',
      descripcion: 'Naked compacta ideal para principiantes',
      imagen: 'https://i.redd.it/bmw-g310rr-cosmic-black-vs-polar-white-v0-ws6aldy0rzoc1.jpg?width=1600&format=pjpg&auto=webp&s=6c41178695328aec064706c166efd56c841fe140'
    },
    {
      modelo: 'F900R',
      cilindraje: '895cc',
      precio: '$50,000,000',
      potencia: '105 HP',
      descripcion: 'Naked versátil y deportiva',
      imagen: 'https://http2.mlstatic.com/D_NQ_NP_784356-MCO95842985791_102025-O.webp'
    },
    {
      modelo: 'R1250GS',
      cilindraje: '1254cc',
      precio: '$85,000,000',
      potencia: '136 HP',
      descripcion: 'La adventure más icónica del mundo',
      imagen: 'https://http2.mlstatic.com/D_NQ_NP_704993-MCO100502195077_122025-O.webp'
    },
    {
      modelo: 'M1000RR',
      cilindraje: '999cc',
      precio: '$135,000,000',
      potencia: '212 HP',
      descripcion: 'Superbike de competición con tecnología M',
      imagen: 'https://soymotero.net/wp-content/uploads/2020/09/bmw_m1000rr_ok.jpg'
    },
    {
      modelo: 'S1000R',
      cilindraje: '999cc',
      precio: '$72,000,000',
      potencia: '165 HP',
      descripcion: 'Naked deportiva con ADN de superbike',
      imagen: 'https://e0.pxfuel.com/wallpapers/71/184/desktop-wallpaper-junior-alves-bmw-s1000rr-black.jpg'
    },
    {
      modelo: 'F850GS',
      cilindraje: '853cc',
      precio: '$62,000,000',
      potencia: '95 HP',
      descripcion: 'Adventure media perfecta para on/off road',
      imagen: 'https://d3bmp4azzreq60.cloudfront.net/fit-in/500x500/vendetunave/images/vehiculos/68938f26e76bf.webp'
    }
  ];
}