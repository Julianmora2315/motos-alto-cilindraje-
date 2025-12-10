// honda.component.ts
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
  selector: 'app-honda',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './honda.html',
  styleUrl: './honda.css'
})
export class HondaComponent {
  showModal = false;
  motoSeleccionada: Moto | null = null;

  motos: Moto[] = [
    { 
      modelo: 'CBR1000RR-R', 
      cilindraje: '999cc', 
      precio: '$125,000,000', 
      potencia: '217 HP',
      descripcion: 'Superbike de competición con tecnología MotoGP',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTijD8p8lR2xNVcDx1_U832Nedk-VQUe4rNw&s',
      detalles: {
        motor: '4 cilindros en línea, 999cc',
        potenciaDetallada: '217 HP @ 14,500 rpm',
        torque: '113 Nm @ 12,500 rpm',
        transmision: '6 velocidades con quickshifter bidireccional',
        peso: '201 kg (peso en orden)',
        tanque: '16.1 litros',
        frenos: 'Brembo Stylema con ABS',
        suspension: 'Öhlins electrónica NPX 43mm',
        electronica: 'IMU de 6 ejes, control de tracción, control de lanzada, quickshifter',
        velocidadMax: '299 km/h'
      }
    },
    { 
      modelo: 'CB650R', 
      cilindraje: '649cc', 
      precio: '$42,000,000', 
      potencia: '95 HP',
      descripcion: 'Naked deportiva con estilo Neo Sports Café',
      imagen: 'https://i.pinimg.com/564x/3e/a3/96/3ea396158705ad20926b1c81cbe64b27.jpg',
      detalles: {
        motor: '4 cilindros en línea, 649cc',
        potenciaDetallada: '95 HP @ 12,000 rpm',
        torque: '64 Nm @ 8,500 rpm',
        transmision: '6 velocidades con asistente de embrague',
        peso: '202 kg (peso en orden)',
        tanque: '15.4 litros',
        frenos: 'Discos duales con ABS de dos canales',
        suspension: 'Horquilla invertida Showa SFF-BP USD 41mm',
        electronica: 'ABS, pantalla LCD con conectividad Bluetooth',
        velocidadMax: '200 km/h'
      }
    },
    { 
      modelo: 'Africa Twin', 
      cilindraje: '1084cc', 
      precio: '$78,000,000', 
      potencia: '102 HP',
      descripcion: 'Adventure legendaria para todo terreno',
      imagen: 'https://motos.honda.com.co/images/cms/Africa-Twin-Tecnologia-web-1080x680-Honda-Multi.png',
      detalles: {
        motor: 'Bicilíndrico en paralelo, 1084cc',
        potenciaDetallada: '102 HP @ 7,500 rpm',
        torque: '105 Nm @ 6,250 rpm',
        transmision: 'DCT de 6 velocidades (opcional)',
        peso: '238 kg (peso en orden)',
        tanque: '24.8 litros',
        frenos: 'Discos duales delanteros con ABS offroad',
        suspension: 'Showa EERA ajustable electrónicamente',
        electronica: 'Modos de conducción, control de tracción, control de crucero',
        velocidadMax: '190 km/h'
      }
    },
    { 
      modelo: 'CBR600RR', 
      cilindraje: '599cc', 
      precio: '$58,000,000', 
      potencia: '118 HP',
      descripcion: 'Supersport pura para pista y carretera',
      imagen: 'https://www.motofichas.com/images/phocagallery/Honda/cbr600rr-2024/11-honda-cbr650rr-2024-estudio-negro-01.jpg',
      detalles: {
        motor: '4 cilindros en línea, 599cc',
        potenciaDetallada: '118 HP @ 13,500 rpm',
        torque: '64 Nm @ 11,000 rpm',
        transmision: '6 velocidades',
        peso: '194 kg (peso en orden)',
        tanque: '18.1 litros',
        frenos: 'Tokico con ABS',
        suspension: 'Horquilla Big Piston invertida 41mm',
        electronica: 'HSTC control de tracción, ABS',
        velocidadMax: '260 km/h'
      }
    },
    { 
      modelo: 'CB500F', 
      cilindraje: '471cc', 
      precio: '$32,000,000', 
      potencia: '47 HP',
      descripcion: 'Naked accesible perfecta para iniciarse',
      imagen: 'https://a.mcdn.es/mnet/contents/media/honda/cb_500_f/1138871.jpg',
      detalles: {
        motor: 'Bicilíndrico en paralelo, 471cc',
        potenciaDetallada: '47 HP @ 8,500 rpm',
        torque: '43 Nm @ 6,500 rpm',
        transmision: '6 velocidades',
        peso: '189 kg (peso en orden)',
        tanque: '17.7 litros',
        frenos: 'Disco dual delantero con ABS',
        suspension: 'Horquilla telescópica 41mm',
        electronica: 'ABS de dos canales',
        velocidadMax: '180 km/h'
      }
    },
    { 
      modelo: 'Gold Wing', 
      cilindraje: '1833cc', 
      precio: '$140,000,000', 
      potencia: '126 HP',
      descripcion: 'Touring de lujo supremo para largos viajes',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5ORZwTqge7e6Lkvx5QaYiZsP1NdUGj-OFSQ&s',
      detalles: {
        motor: 'Bóxer de 6 cilindros horizontales, 1833cc',
        potenciaDetallada: '126 HP @ 5,500 rpm',
        torque: '170 Nm @ 4,500 rpm',
        transmision: 'DCT de 7 velocidades con marcha atrás',
        peso: '389 kg (peso en orden)',
        tanque: '21.1 litros',
        frenos: 'ABS Pro con control de frenada en curva',
        suspension: 'Doble horquilla delantera con control electrónico',
        electronica: 'Sistema de navegación, Apple CarPlay, control de crucero adaptativo',
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