// ducati.component.ts
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
  selector: 'app-ducati',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './ducati.html',
  styleUrl: './ducati.css'
})
export class DucatiComponent {
  showModal = false;
  motoSeleccionada: Moto | null = null;

  motos: Moto[] = [
    { 
      modelo: 'Panigale V4', 
      cilindraje: '1103cc', 
      precio: '$120,000,000', 
      potencia: '214 HP',
      descripcion: 'La superbike italiana más potente y tecnológica',
      imagen: 'https://www.ducaticanarias.com/wp-content/uploads/2022/07/DUCATI_PANIGALE_V4S_STATIC_001_UC355519_High.jpg',
      detalles: {
        motor: 'V4 de 90° Desmosedici Stradale, 1103cc',
        potenciaDetallada: '214 HP @ 13,000 rpm',
        torque: '124 Nm @ 9,500 rpm',
        transmision: '6 velocidades con quickshifter bidireccional',
        peso: '195 kg (peso en seco)',
        tanque: '16 litros',
        frenos: 'Brembo Stylema con ABS Cornering',
        suspension: 'Öhlins electrónica totalmente ajustable',
        electronica: 'Paquete completo con control de tracción, wheelie, launch control',
        velocidadMax: '299 km/h'
      }
    },
    { 
      modelo: 'Monster 937', 
      cilindraje: '937cc', 
      precio: '$58,000,000', 
      potencia: '111 HP',
      descripcion: 'Naked icónica con diseño minimalista italiano',
      imagen: 'https://www.rizoma.com/wp-content/uploads/rizoma/media/6/0622522371_WEB_BZDM00000MN93723045.jpg.jpg',
      detalles: {
        motor: 'Testastretta 11° L-Twin, 937cc',
        potenciaDetallada: '111 HP @ 9,250 rpm',
        torque: '93 Nm @ 6,500 rpm',
        transmision: '6 velocidades con quickshifter up/down',
        peso: '188 kg (peso en orden)',
        tanque: '14 litros',
        frenos: 'Brembo M4.32 con ABS Cornering',
        suspension: 'Horquilla invertida Marzocchi 43mm',
        electronica: 'Modos de conducción, control de tracción, ABS cornering',
        velocidadMax: '200 km/h'
      }
    },
    { 
      modelo: 'SuperSport 950', 
      cilindraje: '937cc', 
      precio: '$68,000,000', 
      potencia: '110 HP',
      descripcion: 'Deportiva versátil para uso diario y fin de semana',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwc3sc4ElBmE548qSHdEnJiult_ZZokcgozQ&s',
      detalles: {
        motor: 'Testastretta 11° L-Twin, 937cc',
        potenciaDetallada: '110 HP @ 9,000 rpm',
        torque: '93 Nm @ 6,500 rpm',
        transmision: '6 velocidades con quickshifter',
        peso: '210 kg (peso en orden)',
        tanque: '16 litros',
        frenos: 'Brembo con ABS Bosch',
        suspension: 'Horquilla invertida Marzocchi totalmente ajustable',
        electronica: 'Tres modos de conducción, control de tracción, ABS',
        velocidadMax: '230 km/h'
      }
    },
    { 
      modelo: 'Streetfighter V4', 
      cilindraje: '1103cc', 
      precio: '$115,000,000', 
      potencia: '208 HP',
      descripcion: 'Naked extrema derivada de la Panigale V4',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1_t63Im2xS3pc-feJs_kCms_v6maLjsA52w&s',
      detalles: {
        motor: 'V4 de 90° Desmosedici Stradale, 1103cc',
        potenciaDetallada: '208 HP @ 13,000 rpm',
        torque: '123 Nm @ 9,500 rpm',
        transmision: '6 velocidades con quickshifter bidireccional',
        peso: '201 kg (peso en seco)',
        tanque: '17 litros',
        frenos: 'Brembo Stylema con ABS Cornering EVO',
        suspension: 'Öhlins electrónica Smart EC 2.0',
        electronica: 'Paquete racing completo, control de lanzada, wheelie control',
        velocidadMax: '285 km/h'
      }
    },
    { 
      modelo: 'Multistrada V4', 
      cilindraje: '1158cc', 
      precio: '$105,000,000', 
      potencia: '170 HP',
      descripcion: 'Adventure touring de alto rendimiento con radar',
      imagen: 'https://soymotero.net/wp-content/uploads/2024/09/MY25_DUCATI_MULTISTRADA_V4S_DYN_ONLOCATION-_149__UC692582_High.jpg',
      detalles: {
        motor: 'V4 Granturismo de 90°, 1158cc',
        potenciaDetallada: '170 HP @ 10,500 rpm',
        torque: '121 Nm @ 8,750 rpm',
        transmision: '6 velocidades con quickshifter',
        peso: '243 kg (peso en orden)',
        tanque: '22 litros',
        frenos: 'Brembo con ABS Cornering y radar delantero/trasero',
        suspension: 'Skyhook Ducati con control electrónico',
        electronica: 'Control crucero adaptativo, control de velocidad en descenso, 4 modos',
        velocidadMax: '270 km/h'
      }
    },
    { 
      modelo: 'Scrambler Icon', 
      cilindraje: '803cc', 
      precio: '$45,000,000', 
      potencia: '73 HP',
      descripcion: 'Retro moderna con espíritu libre y divertido',
      imagen: 'https://quadis.s3.amazonaws.com/GestorQuadis/Vehiculos/DUCATI_SCRAMBLER%20ICON_803_473028/IMG_0630.jpg',
      detalles: {
        motor: 'L-Twin Desmodue, 803cc',
        potenciaDetallada: '73 HP @ 8,250 rpm',
        torque: '66.2 Nm @ 5,750 rpm',
        transmision: '6 velocidades',
        peso: '189 kg (peso en orden)',
        tanque: '13.5 litros',
        frenos: 'Brembo con ABS desconectable',
        suspension: 'Horquilla invertida Kayaba 41mm',
        electronica: 'ABS desconectable, control de tracción',
        velocidadMax: '180 km/h'
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