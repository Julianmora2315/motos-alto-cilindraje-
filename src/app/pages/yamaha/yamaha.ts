import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header';
import { FooterComponent } from '../../components/footer/footer';

@Component({
  selector: 'app-yamaha',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './yamaha.html',
  styleUrl: './yamaha.css'
})
export class YamahaComponent {
  motos = [
    { 
      modelo: 'YZF-R1', 
      cilindraje: '998cc', 
      precio: '$75,000,000', 
      potencia: '200 HP',
      descripcion: 'La superbike más avanzada de Yamaha',
      imagen: 'https://rbsyamaha.co.za/cdn/shop/files/Gallery-Image-R1-5.webp?v=1759239215'
    },
    { 
      modelo: 'MT-09', 
      cilindraje: '889cc', 
      precio: '$45,000,000', 
      potencia: '117 HP',
      descripcion: 'Naked deportiva con carácter agresivo',
      imagen: 'https://images.unsplash.com/photo-1630787283150-519a05fefee3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    { 
      modelo: 'YZF-R6', 
      cilindraje: '599cc', 
      precio: '$55,000,000', 
      potencia: '117 HP',
      descripcion: 'Deportiva de media cilindrada perfecta para circuito',
      imagen: 'https://us.123rf.com/450wm/pekosman/pekosman2309/pekosman230913245/213381052-modern-powerful-sports-motorcycle-dark-background.jpg?ver=6'
    },
    { 
      modelo: 'MT-07', 
      cilindraje: '689cc', 
      precio: '$38,000,000', 
      potencia: '73 HP',
      descripcion: 'Naked ligera y ágil, perfecta para la ciudad',
      imagen: 'https://i.pinimg.com/736x/bc/ff/2c/bcff2cd6acb888cfc79396fb9c2abbda.jpg'
    },
    { 
      modelo: 'YZF-R3', 
      cilindraje: '321cc', 
      precio: '$28,000,000', 
      potencia: '42 HP',
      descripcion: 'Deportiva de entrada ideal para nuevos pilotos',
      imagen: 'https://images.pexels.com/photos/19161359/pexels-photo-19161359.jpeg'
    },
    { 
      modelo: 'MT-10', 
      cilindraje: '998cc', 
      precio: '$65,000,000', 
      potencia: '165 HP',
      descripcion: 'Hyper naked con motor de R1 y carácter salvaje',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmiHPbkAnM5IbnUI_8tGGSbSr_BkJvJQGShw&s'
    }
  ];
}