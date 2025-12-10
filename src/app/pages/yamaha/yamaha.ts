// yamaha.component.ts
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
  selector: 'app-yamaha',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './yamaha.html',
  styleUrl: './yamaha.css'
})
export class YamahaComponent {
  showModal = false;
  motoSeleccionada: Moto | null = null;

  motos: Moto[] = [
    { 
      modelo: 'YZF-R1', 
      cilindraje: '998cc', 
      precio: '$75,000,000', 
      potencia: '200 HP',
      descripcion: 'La superbike más avanzada de Yamaha',
      imagen: 'https://rbsyamaha.co.za/cdn/shop/files/Gallery-Image-R1-5.webp?v=1759239215',
      detalles: {
        motor: '4 cilindros en línea, 998cc con crossplane',
        potenciaDetallada: '200 HP @ 13,500 rpm',
        torque: '112.4 Nm @ 11,500 rpm',
        transmision: '6 velocidades con quickshifter',
        peso: '199 kg (peso en seco)',
        tanque: '17 litros',
        frenos: 'Brembo con ABS',
        suspension: 'Horquilla KYB totalmente ajustable',
        electronica: 'Control de tracción, modos de potencia, launch control, quickshifter',
        velocidadMax: '299 km/h'
      }
    },
    { 
      modelo: 'MT-09', 
      cilindraje: '889cc', 
      precio: '$45,000,000', 
      potencia: '117 HP',
      descripcion: 'Naked deportiva con carácter agresivo',
      imagen: 'https://images.unsplash.com/photo-1630787283150-519a05fefee3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      detalles: {
        motor: '3 cilindros en línea CP3, 889cc',
        potenciaDetallada: '117 HP @ 10,000 rpm',
        torque: '93 Nm @ 7,000 rpm',
        transmision: '6 velocidades con quickshifter',
        peso: '189 kg (peso en orden)',
        tanque: '14 litros',
        frenos: 'Discos duales delanteros con ABS',
        suspension: 'Horquilla KYB invertida 41mm',
        electronica: 'Control de tracción, modos de conducción, ABS',
        velocidadMax: '220 km/h'
      }
    },
    { 
      modelo: 'YZF-R6', 
      cilindraje: '599cc', 
      precio: '$55,000,000', 
      potencia: '117 HP',
      descripcion: 'Deportiva de media cilindrada perfecta para circuito',
      imagen: 'https://us.123rf.com/450wm/pekosman/pekosman2309/pekosman230913245/213381052-modern-powerful-sports-motorcycle-dark-background.jpg?ver=6',
      detalles: {
        motor: '4 cilindros en línea, 599cc',
        potenciaDetallada: '117 HP @ 14,500 rpm',
        torque: '61.7 Nm @ 10,500 rpm',
        transmision: '6 velocidades con quickshifter',
        peso: '190 kg (peso en orden)',
        tanque: '17 litros',
        frenos: 'Discos duales delanteros con ABS',
        suspension: 'Horquilla KYB invertida totalmente ajustable',
        electronica: 'Control de tracción, ABS, modos de potencia',
        velocidadMax: '260 km/h'
      }
    },
    { 
      modelo: 'MT-07', 
      cilindraje: '689cc', 
      precio: '$38,000,000', 
      potencia: '73 HP',
      descripcion: 'Naked ligera y ágil, perfecta para la ciudad',
      imagen: 'https://i.pinimg.com/736x/bc/ff/2c/bcff2cd6acb888cfc79396fb9c2abbda.jpg',
      detalles: {
        motor: 'Bicilíndrico en paralelo CP2, 689cc',
        potenciaDetallada: '73 HP @ 8,750 rpm',
        torque: '67 Nm @ 6,500 rpm',
        transmision: '6 velocidades con asistente de embrague',
        peso: '184 kg (peso en orden)',
        tanque: '14 litros',
        frenos: 'Discos duales delanteros con ABS',
        suspension: 'Horquilla telescópica 41mm',
        electronica: 'ABS de dos canales',
        velocidadMax: '200 km/h'
      }
    },
    { 
      modelo: 'YZF-R3', 
      cilindraje: '321cc', 
      precio: '$28,000,000', 
      potencia: '42 HP',
      descripcion: 'Deportiva de entrada ideal para nuevos pilotos',
      imagen: 'https://images.pexels.com/photos/19161359/pexels-photo-19161359.jpeg',
      detalles: {
        motor: 'Bicilíndrico en paralelo, 321cc',
        potenciaDetallada: '42 HP @ 10,750 rpm',
        torque: '29.6 Nm @ 9,000 rpm',
        transmision: '6 velocidades con asistente de embrague',
        peso: '169 kg (peso en orden)',
        tanque: '14 litros',
        frenos: 'Discos únicos delanteros con ABS',
        suspension: 'Horquilla telescópica 37mm',
        electronica: 'ABS de dos canales',
        velocidadMax: '180 km/h'
      }
    },
    { 
      modelo: 'MT-10', 
      cilindraje: '998cc', 
      precio: '$65,000,000', 
      potencia: '165 HP',
      descripcion: 'Hyper naked con motor de R1 y carácter salvaje',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmiHPbkAnM5IbnUI_8tGGSbSr_BkJvJQGShw&s',
      detalles: {
        motor: '4 cilindros en línea crossplane, 998cc',
        potenciaDetallada: '165 HP @ 11,500 rpm',
        torque: '111 Nm @ 9,000 rpm',
        transmision: '6 velocidades con quickshifter',
        peso: '212 kg (peso en orden)',
        tanque: '17 litros',
        frenos: 'Brembo con ABS',
        suspension: 'Horquilla KYB invertida totalmente ajustable',
        electronica: 'Control de tracción, wheelie control, modos de potencia, quickshifter',
        velocidadMax: '250 km/h'
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