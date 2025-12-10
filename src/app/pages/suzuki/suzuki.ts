// suzuki.component.ts
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
  selector: 'app-suzuki',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './suzuki.html',
  styleUrl: './suzuki.css'
})
export class SuzukiComponent {
  showModal = false;
  motoSeleccionada: Moto | null = null;

  motos: Moto[] = [
    { 
      modelo: 'GSX-R1000R', 
      cilindraje: '999cc', 
      precio: '$85,000,000', 
      potencia: '202 HP',
      descripcion: 'Superbike legendaria con tecnología MotoGP',
      imagen: 'https://i.blogs.es/09f956/suzuki-gsx-r-1000-phantom-2022-013/840_560.jpeg',
      detalles: {
        motor: '4 cilindros en línea, 999cc',
        potenciaDetallada: '202 HP @ 13,200 rpm',
        torque: '117.6 Nm @ 10,800 rpm',
        transmision: '6 velocidades con quickshifter bidireccional',
        peso: '203 kg (peso en orden)',
        tanque: '16 litros',
        frenos: 'Brembo monobloque con ABS',
        suspension: 'Showa Balance Free Front Fork con control electrónico',
        electronica: 'Sistema de control de tracción de 10 niveles, launch control, modos de potencia',
        velocidadMax: '299 km/h'
      }
    },
    { 
      modelo: 'GSX-S1000', 
      cilindraje: '999cc', 
      precio: '$55,000,000', 
      potencia: '152 HP',
      descripcion: 'Naked deportiva con carácter agresivo',
      imagen: 'https://www.suzuki.com.co/sites/default/files/2021-04/GSXS1000%20Foto%201.jpg',
      detalles: {
        motor: '4 cilindros en línea, 999cc',
        potenciaDetallada: '152 HP @ 11,000 rpm',
        torque: '106 Nm @ 9,250 rpm',
        transmision: '6 velocidades con asistente de embrague',
        peso: '214 kg (peso en orden)',
        tanque: '19 litros',
        frenos: 'Discos duales delanteros con ABS',
        suspension: 'Horquilla invertida KYB totalmente ajustable',
        electronica: 'Control de tracción de 3 modos, ABS',
        velocidadMax: '240 km/h'
      }
    },
    { 
      modelo: 'V-Strom 1050', 
      cilindraje: '1037cc', 
      precio: '$68,000,000', 
      potencia: '107 HP',
      descripcion: 'Adventure confiable para largos viajes',
      imagen: 'https://e1.pxfuel.com/desktop-wallpaper/78/70/desktop-wallpaper-32-great-suzuki-v-strom-2019-with-suzuki-v-strom-2019-suzuki-v-strom.jpg',
      detalles: {
        motor: 'V-Twin de 90°, 1037cc',
        potenciaDetallada: '107 HP @ 8,500 rpm',
        torque: '100 Nm @ 6,000 rpm',
        transmision: '6 velocidades',
        peso: '247 kg (peso en orden)',
        tanque: '20 litros',
        frenos: 'Discos duales delanteros con ABS',
        suspension: 'Horquilla invertida ajustable con largo recorrido',
        electronica: 'Control de tracción, modos de conducción, ABS cornering',
        velocidadMax: '200 km/h'
      }
    },
    { 
      modelo: 'Hayabusa', 
      cilindraje: '1340cc', 
      precio: '$110,000,000', 
      potencia: '190 HP',
      descripcion: 'La hyper sport más icónica y veloz',
      imagen: 'https://e0.pxfuel.com/wallpapers/625/173/desktop-wallpaper-suzuki-hayabusa-hayabusa-motorcycle-thumbnail.jpg',
      detalles: {
        motor: '4 cilindros en línea, 1340cc',
        potenciaDetallada: '190 HP @ 9,700 rpm',
        torque: '150 Nm @ 7,000 rpm',
        transmision: '6 velocidades con quickshifter bidireccional',
        peso: '264 kg (peso en orden)',
        tanque: '20 litros',
        frenos: 'Brembo Stylema con ABS',
        suspension: 'KYB totalmente ajustable electrónicamente',
        electronica: 'IMU de 6 ejes, control de lanzada, control de caballito, cruise control',
        velocidadMax: '299 km/h (limitada)'
      }
    },
    { 
      modelo: 'GSX-R750', 
      cilindraje: '750cc', 
      precio: '$65,000,000', 
      potencia: '148 HP',
      descripcion: 'Deportiva equilibrada, la perfecta supersport',
      imagen: 'https://e1.pxfuel.com/desktop-wallpaper/34/748/desktop-wallpaper-black-suzuki-gsx-suzuki-750.jpg',
      detalles: {
        motor: '4 cilindros en línea, 750cc',
        potenciaDetallada: '148 HP @ 13,200 rpm',
        torque: '86.3 Nm @ 11,200 rpm',
        transmision: '6 velocidades',
        peso: '190 kg (peso en seco)',
        tanque: '16.5 litros',
        frenos: 'Brembo con ABS',
        suspension: 'Showa Big Piston Fork totalmente ajustable',
        electronica: 'Control de tracción, ABS',
        velocidadMax: '280 km/h'
      }
    },
    { 
      modelo: 'SV650', 
      cilindraje: '645cc', 
      precio: '$35,000,000', 
      potencia: '76 HP',
      descripcion: 'Naked ligera y divertida, perfecta para todos',
      imagen: 'https://www.motoplanete.com/suzuki/zoom-700px/10751-SV-650-2025-1000px.webp',
      detalles: {
        motor: 'V-Twin de 90°, 645cc',
        potenciaDetallada: '76 HP @ 8,500 rpm',
        torque: '64 Nm @ 8,100 rpm',
        transmision: '6 velocidades',
        peso: '197 kg (peso en orden)',
        tanque: '14.5 litros',
        frenos: 'Discos duales delanteros con ABS',
        suspension: 'Horquilla telescópica 41mm',
        electronica: 'ABS de dos canales',
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