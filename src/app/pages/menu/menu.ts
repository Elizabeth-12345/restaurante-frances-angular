import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink, NgIf, NgFor],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class MenuComponent {

  categoriaModal = '';
  mostrarModal = false;
  favoritos: string[] = [];
  abrirModal(categoria: string) {
    this.categoriaModal = categoria;
    this.mostrarModal = true;
  }
  cerrarModal() {
    this.mostrarModal = false;
  }
  toggleFavorito(plato: string) {
    if (this.favoritos.includes(plato)) {
      this.favoritos = this.favoritos.filter(
        item => item !== plato
      );
    } else {
      this.favoritos.push(plato);
    }
  }
}