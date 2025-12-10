// kawasaki.component.ts
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
  selector: 'app-kawasaki',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './kawasaki.html',
  styleUrl: './kawasaki.css'
})
export class KawasakiComponent {
  showModal = false;
  motoSeleccionada: Moto | null = null;

  motos: Moto[] = [
    { 
      modelo: 'Ninja ZX-10R', 
      cilindraje: '998cc', 
      precio: '$80,000,000', 
      potencia: '203 HP',
      descripcion: 'Superbike de pista con tecnología WSBK',
      imagen: 'https://www.cycleworld.com/resizer/CQy28yBCyL-BM4fZaIMX-TIkJwE=/1440x0/filters:focal(NaNxNaN:NaNxNaN)/cloudfront-us-east-1.images.arcpublishing.com/octane/UCMNJ4R7ZBHE5GYCGCIERAWWPM.jpg',
      detalles: {
        motor: '4 cilindros en línea, 998cc',
        potenciaDetallada: '203 HP @ 13,200 rpm',
        torque: '114.9 Nm @ 11,400 rpm',
        transmision: '6 velocidades con quickshifter',
        peso: '207 kg (peso en orden)',
        tanque: '17 litros',
        frenos: 'Brembo M50 monobloque con ABS',
        suspension: 'Showa Balance Free Fork con ajuste electrónico',
        electronica: 'KIBS ABS, KTRC control de tracción, modos de potencia, launch control',
        velocidadMax: '299 km/h'
      }
    },
    { 
      modelo: 'Z900', 
      cilindraje: '948cc', 
      precio: '$48,000,000', 
      potencia: '125 HP',
      descripcion: 'Naked agresiva con diseño Sugomi',
      imagen: 'https://lamoto.com.ar/wp-content/uploads/2020/01/kawa-z900.jpg',
      detalles: {
        motor: '4 cilindros en línea, 948cc',
        potenciaDetallada: '125 HP @ 9,500 rpm',
        torque: '98.6 Nm @ 7,700 rpm',
        transmision: '6 velocidades con asistente de embrague',
        peso: '210 kg (peso en orden)',
        tanque: '17 litros',
        frenos: 'Discos duales delanteros con ABS',
        suspension: 'Horquilla invertida 41mm ajustable',
        electronica: 'Modos de conducción, control de tracción, ABS',
        velocidadMax: '230 km/h'
      }
    },
    { 
      modelo: 'Ninja 400', 
      cilindraje: '399cc', 
      precio: '$28,000,000', 
      potencia: '49 HP',
      descripcion: 'Deportiva ligera perfecta para iniciar',
      imagen: 'https://ridermagazinereviews.com/wp-content/uploads/2019/12/2018-Kawasaki-Ninja-400.jpg',
      detalles: {
        motor: 'Bicilíndrico en paralelo, 399cc',
        potenciaDetallada: '49 HP @ 10,000 rpm',
        torque: '38 Nm @ 8,000 rpm',
        transmision: '6 velocidades con asistente de embrague',
        peso: '168 kg (peso en orden)',
        tanque: '14 litros',
        frenos: 'Disco único delantero con ABS',
        suspension: 'Horquilla telescópica 41mm',
        electronica: 'ABS de dos canales',
        velocidadMax: '180 km/h'
      }
    },
    { 
      modelo: 'Ninja H2', 
      cilindraje: '998cc', 
      precio: '$150,000,000', 
      potencia: '231 HP',
      descripcion: 'Hypersport sobrealimentada, la más extrema',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1SttN3Gh29SOWYDxtrw_nGtIPoxQjEbQvQg&s',
      detalles: {
        motor: '4 cilindros en línea sobrealimentado, 998cc',
        potenciaDetallada: '231 HP @ 11,500 rpm (con RAM AIR)',
        torque: '141.7 Nm @ 11,000 rpm',
        transmision: '6 velocidades con quickshifter',
        peso: '238 kg (peso en orden)',
        tanque: '17 litros',
        frenos: 'Brembo monobloque con ABS cornering',
        suspension: 'Showa Balance Free Fork con ajuste electrónico',
        electronica: 'Launch control, control de tracción, modos de potencia, quickshifter',
        velocidadMax: '337 km/h'
      }
    },
    { 
      modelo: 'Z650', 
      cilindraje: '649cc', 
      precio: '$35,000,000', 
      potencia: '68 HP',
      descripcion: 'Naked versátil ideal para ciudad y carretera',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShkMMjOt589sviJcmlQLWh0_jfopkJKGO3aA&s',
      detalles: {
        motor: 'Bicilíndrico en paralelo, 649cc',
        potenciaDetallada: '68 HP @ 8,000 rpm',
        torque: '65.7 Nm @ 7,000 rpm',
        transmision: '6 velocidades con asistente de embrague',
        peso: '187.5 kg (peso en orden)',
        tanque: '15 litros',
        frenos: 'Discos duales delanteros con ABS',
        suspension: 'Horquilla telescópica 41mm',
        electronica: 'ABS de dos canales',
        velocidadMax: '200 km/h'
      }
    },
    { 
      modelo: 'Ninja ZX-6R', 
      cilindraje: '636cc', 
      precio: '$60,000,000', 
      potencia: '128 HP',
      descripcion: 'Supersport de media cilindrada dominante en pista',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV20CQIsVugrt0OKEDB2FliacfqMsb-GTicw&s',
      detalles: {
        motor: '4 cilindros en línea, 636cc',
        potenciaDetallada: '128 HP @ 13,500 rpm',
        torque: '70.8 Nm @ 11,000 rpm',
        transmision: '6 velocidades con quickshifter',
        peso: '196 kg (peso en orden)',
        tanque: '17 litros',
        frenos: 'Discos duales delanteros con ABS',
        suspension: 'Horquilla invertida Showa SFF-BP 41mm',
        electronica: 'KTRC control de tracción, ABS, modos de potencia',
        velocidadMax: '260 km/h'
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