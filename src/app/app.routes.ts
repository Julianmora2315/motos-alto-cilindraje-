import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { YamahaComponent } from './pages/yamaha/yamaha';
import { KawasakiComponent } from './pages/kawasaki/kawasaki';
import { DucatiComponent } from './pages/ducati/ducati';
import { BmwComponent } from './pages/bmw/bmw';
import { SuzukiComponent } from './pages/suzuki/suzuki';
import { HondaComponent } from './pages/honda/honda';
import { ContactComponent } from './pages/contact/contact'; // ← Nuevo

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'yamaha', component: YamahaComponent },
  { path: 'kawasaki', component: KawasakiComponent},
  { path: 'ducati', component: DucatiComponent },
  { path: 'bmw', component: BmwComponent},
  { path: 'suzuki', component: SuzukiComponent },
  { path: 'honda', component: HondaComponent },
  { path: 'contacto', component: ContactComponent }, // ← Nuevo
  { path: '**', redirectTo: '' }
];