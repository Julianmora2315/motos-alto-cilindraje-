// header.component.ts
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink], // ← Importante: importa RouterLink
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {}