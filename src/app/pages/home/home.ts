import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { HeaderComponent } from '../../components/header/header';
import { FooterComponent } from '../../components/footer/footer';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, HeaderComponent, FooterComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
  
  constructor(private router: Router) {}

  marcas = [
    { nombre: 'YAMAHA', color: '#ef4444', ruta: '/yamaha' },
    { nombre: 'KAWASAKI', color: '#ef4444', ruta: '/kawasaki' },
    { nombre: 'DUCATI', color: '#ef4444', ruta: '/ducati' },
    { nombre: 'BMW', color: '#ef4444', ruta: '/bmw' },
    { nombre: 'SUZUKI', color: '#ef4444', ruta: '/suzuki' },
    { nombre: 'HONDA', color: '#ef4444', ruta: '/honda' }
  ];

  agendarTestDrive() {
    this.router.navigate(['/contacto']);
  }

  contactar() {
    window.open('https://wa.me/573219009694?text=Hola, quiero información sobre las motos de alto cilindraje', '_blank');
  }
}