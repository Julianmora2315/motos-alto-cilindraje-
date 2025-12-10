import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../components/header/header';

@Component({
  selector: 'app-sobre-nosotros',
  standalone: true,
  imports: [RouterLink, HeaderComponent],
  templateUrl: './sobre-nosotros.html',
  styleUrl: './sobre-nosotros.css',
})
export class SobreNosotros {}