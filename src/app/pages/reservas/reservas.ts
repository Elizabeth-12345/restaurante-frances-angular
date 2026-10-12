import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-reservas',
  standalone: true,
  imports: [RouterLink, FormsModule, NgIf],
  templateUrl: './reservas.html',
  styleUrl: './reservas.css'
})
export class ReservasComponent {
  nombre = '';
  telefono = '';
  fecha = '';
  hora = '';
  personas = '2';
  mensaje = '';
  fechaMinima = new Date()
    .toISOString()
    .split('T')[0];
  reservaRealizada = false;
  reservar() {
    this.reservaRealizada = true;
  }
  cerrarMensaje() {
    this.reservaRealizada = false;
    this.nombre = '';
    this.telefono = '';
    this.fecha = '';
    this.hora = '';
    this.personas = '2';
    this.mensaje = '';
  }
}