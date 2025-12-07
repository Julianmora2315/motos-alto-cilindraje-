// ducati.component.ts
import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header';
import { FooterComponent } from '../../components/footer/footer';

@Component({
  selector: 'app-ducati',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './ducati.html',
  styleUrl: './ducati.css'
})
export class DucatiComponent {
  motos = [
    { 
      modelo: 'Panigale V4', 
      cilindraje: '1103cc', 
      precio: '$120,000,000', 
      potencia: '214 HP',
      descripcion: 'La superbike italiana más potente y tecnológica',
      imagen: 'https://www.ducaticanarias.com/wp-content/uploads/2022/07/DUCATI_PANIGALE_V4S_STATIC_001_UC355519_High.jpg'
    },
    { 
      modelo: 'Monster 937', 
      cilindraje: '937cc', 
      precio: '$58,000,000', 
      potencia: '111 HP',
      descripcion: 'Naked icónica con diseño minimalista italiano',
      imagen: 'https://www.rizoma.com/wp-content/uploads/rizoma/media/6/0622522371_WEB_BZDM00000MN93723045.jpg.jpg'
    },
    { 
      modelo: 'SuperSport 950', 
      cilindraje: '937cc', 
      precio: '$68,000,000', 
      potencia: '110 HP',
      descripcion: 'Deportiva versátil para uso diario y fin de semana',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwc3sc4ElBmE548qSHdEnJiult_ZZokcgozQ&s'
    },
    { 
      modelo: 'Streetfighter V4', 
      cilindraje: '1103cc', 
      precio: '$115,000,000', 
      potencia: '208 HP',
      descripcion: 'Naked extrema derivada de la Panigale V4',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1_t63Im2xS3pc-feJs_kCms_v6maLjsA52w&s'
    },
    { 
      modelo: 'Multistrada V4', 
      cilindraje: '1158cc', 
      precio: '$105,000,000', 
      potencia: '170 HP',
      descripcion: 'Adventure touring de alto rendimiento con radar',
      imagen: 'https://soymotero.net/wp-content/uploads/2024/09/MY25_DUCATI_MULTISTRADA_V4S_DYN_ONLOCATION-_149__UC692582_High.jpg'
    },
    { 
      modelo: 'Scrambler Icon', 
      cilindraje: '803cc', 
      precio: '$45,000,000', 
      potencia: '73 HP',
      descripcion: 'Retro moderna con espíritu libre y divertido',
      imagen: 'https://quadis.s3.amazonaws.com/GestorQuadis/Vehiculos/DUCATI_SCRAMBLER%20ICON_803_473028/IMG_0630.jpg'
    }
  ];
}