import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../components/header/header';

@Component({
  selector: 'app-financiamiento',
  standalone: true,
  imports: [RouterLink, HeaderComponent],
  templateUrl: './financiamiento.html',
  styleUrl: './financiamiento.css',
})
export class Financiamiento {}