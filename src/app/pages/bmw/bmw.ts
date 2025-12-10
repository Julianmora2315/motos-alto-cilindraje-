import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header';
import { FooterComponent } from '../../components/footer/footer';

interface Moto {
  modelo: string;
  cilindraje: string;
  precio: string;
  potencia: string;
  descripcion: string;
  imagen: string;
  detalles?: {
    motor: string;
    potenciaDetallada: string;
    torque: string;
    transmision: string;
    peso: string;
    tanque: string;
    frenos: string;
    suspension: string;
    electronica: string;
    velocidadMax: string;
  };
}

@Component({
  selector: 'app-bmw',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './bmw.html',
  styleUrl: './bmw.css'
})
export class BmwComponent {
  showModal = false;
  motoSeleccionada: Moto | null = null;

  motos: Moto[] = [
    {
      modelo: 'G310R',
      cilindraje: '313cc',
      precio: '$25,000,000',
      potencia: '34 HP',
      descripcion: 'Naked compacta ideal para principiantes',
      imagen: 'https://i.redd.it/bmw-g310rr-cosmic-black-vs-polar-white-v0-ws6aldy0rzoc1.jpg?width=1600&format=pjpg&auto=webp&s=6c41178695328aec064706c166efd56c841fe140',
      detalles: {
        motor: 'Monocilíndrico de 4 tiempos, 313cc',
        potenciaDetallada: '34 HP @ 9,500 rpm',
        torque: '28 Nm @ 7,500 rpm',
        transmision: '6 velocidades',
        peso: '158.5 kg (peso en orden)',
        tanque: '11 litros',
        frenos: 'Disco único delantero y trasero con ABS',
        suspension: 'Horquilla telescópica invertida delantera',
        electronica: 'ABS de serie',
        velocidadMax: '143 km/h'
      }
    },
    {
      modelo: 'F900R',
      cilindraje: '895cc',
      precio: '$50,000,000',
      potencia: '105 HP',
      descripcion: 'Naked versátil y deportiva',
      imagen: 'https://http2.mlstatic.com/D_NQ_NP_784356-MCO95842985791_102025-O.webp',
      detalles: {
        motor: 'Bicilíndrico en línea, 895cc',
        potenciaDetallada: '105 HP @ 8,500 rpm',
        torque: '92 Nm @ 6,500 rpm',
        transmision: '6 velocidades',
        peso: '211 kg (peso en orden)',
        tanque: '13 litros',
        frenos: 'Discos dobles delanteros con ABS Pro',
        suspension: 'Horquilla invertida delantera ajustable',
        electronica: 'Modos de conducción, control de tracción, ABS Pro',
        velocidadMax: '220 km/h'
      }
    },
    {
      modelo: 'R1250GS',
      cilindraje: '1254cc',
      precio: '$85,000,000',
      potencia: '136 HP',
      descripcion: 'La adventure más icónica del mundo',
      imagen: 'https://http2.mlstatic.com/D_NQ_NP_704993-MCO100502195077_122025-O.webp',
      detalles: {
        motor: 'Bóxer bicilíndrico, 1254cc con ShiftCam',
        potenciaDetallada: '136 HP @ 7,750 rpm',
        torque: '143 Nm @ 6,250 rpm',
        transmision: '6 velocidades',
        peso: '249 kg (peso en orden)',
        tanque: '20 litros',
        frenos: 'Discos dobles delanteros con ABS integral',
        suspension: 'Telelever delantero, Paralever trasero',
        electronica: 'Modos Pro, control crucero, asistente de cambios Pro',
        velocidadMax: '200 km/h'
      }
    },
    {
      modelo: 'M1000RR',
      cilindraje: '999cc',
      precio: '$135,000,000',
      potencia: '212 HP',
      descripcion: 'Superbike de competición con tecnología M',
      imagen: 'https://soymotero.net/wp-content/uploads/2020/09/bmw_m1000rr_ok.jpg',
      detalles: {
        motor: '4 cilindros en línea, 999cc con tecnología M',
        potenciaDetallada: '212 HP @ 14,500 rpm',
        torque: '113 Nm @ 11,000 rpm',
        transmision: '6 velocidades con quickshifter Pro',
        peso: '192 kg (peso en seco)',
        tanque: '16.5 litros',
        frenos: 'M Brake con pinzas radiales y ABS Race',
        suspension: 'Horquilla DDC totalmente ajustable',
        electronica: 'M Modos de conducción, control de lanzada, wing aerodinámico',
        velocidadMax: '306 km/h'
      }
    },
    {
      modelo: 'S1000R',
      cilindraje: '999cc',
      precio: '$72,000,000',
      potencia: '165 HP',
      descripcion: 'Naked deportiva con ADN de superbike',
      imagen: 'https://e0.pxfuel.com/wallpapers/71/184/desktop-wallpaper-junior-alves-bmw-s1000rr-black.jpg',
      detalles: {
        motor: '4 cilindros en línea, 999cc',
        potenciaDetallada: '165 HP @ 11,000 rpm',
        torque: '114 Nm @ 9,250 rpm',
        transmision: '6 velocidades con quickshifter',
        peso: '199 kg (peso en orden)',
        tanque: '16.5 litros',
        frenos: 'Discos dobles delanteros con ABS Pro',
        suspension: 'Horquilla invertida totalmente ajustable',
        electronica: 'Modos Pro, control de tracción, wheelie control',
        velocidadMax: '250 km/h'
      }
    },
    {
      modelo: 'F850GS',
      cilindraje: '853cc',
      precio: '$62,000,000',
      potencia: '95 HP',
      descripcion: 'Adventure media perfecta para on/off road',
      imagen: 'https://d3bmp4azzreq60.cloudfront.net/fit-in/500x500/vendetunave/images/vehiculos/68938f26e76bf.webp',
      detalles: {
        motor: 'Bicilíndrico en línea, 853cc',
        potenciaDetallada: '95 HP @ 8,250 rpm',
        torque: '92 Nm @ 6,250 rpm',
        transmision: '6 velocidades',
        peso: '229 kg (peso en orden)',
        tanque: '15 litros',
        frenos: 'Discos dobles delanteros con ABS offroad',
        suspension: 'Horquilla invertida con largo recorrido',
        electronica: 'Modos de conducción, ABS desconectable, control de tracción',
        velocidadMax: '200 km/h'
      }
    }
  ];

  abrirModal(moto: Moto) {
    this.motoSeleccionada = moto;
    this.showModal = true;
    document.body.style.overflow = 'hidden';
  }

  cerrarModal() {
    this.showModal = false;
    this.motoSeleccionada = null;
    document.body.style.overflow = 'auto';
  }
}
