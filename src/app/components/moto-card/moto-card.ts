import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-moto-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './moto-card.html',
  styleUrls: ['./moto-card.css']
})
export class MotoCardComponent {
  @Input() moto: any;

  verDetalles() {
    alert(`Detalles de ${this.moto.nombre}\n\nMarca: ${this.moto.marca}\nMotor: ${this.moto.cilindraje}\nPotencia: ${this.moto.potencia}\nPrecio: $${this.moto.precio.toLocaleString()}\n\n${this.moto.descripcion}`);
  }
}