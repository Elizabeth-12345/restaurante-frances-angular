import { Routes } from '@angular/router';

import { InicioComponent } from './pages/inicio/inicio';
import { MenuComponent } from './pages/menu/menu';
import { ContactoComponent } from './pages/contacto/contacto';
import { ReservasComponent } from './pages/reservas/reservas';

export const routes: Routes = [
    {
    path: '',
    component: InicioComponent
    },
    {
    path: 'menu',
    component: MenuComponent
    },
    {
    path: 'contacto',
    component: ContactoComponent
    },
    {
    path: 'reservas',
    component: ReservasComponent
    }
];