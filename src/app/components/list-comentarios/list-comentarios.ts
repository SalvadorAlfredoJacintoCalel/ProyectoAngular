import { Component } from '@angular/core';
import { comentario } from '../../interfaces/comentario';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-comentarios',
  imports: [RouterLink],
  templateUrl: './list-comentarios.html',
  styleUrl: './list-comentarios.css'
})

export class ListComentarios {
 listComentarios: comentario[] = [
  { titulo: 'Comentario 1', creador: 'Usuario 3', texto: 'Comentario de prueba', fechaCreacion: new Date('2023-01-01')},
  { titulo: 'Comentario 2', creador: 'Usuario 4', texto: 'Comentario de prueba', fechaCreacion: new Date('2023-01-02')},
  { titulo: 'Comentario 3', creador: 'Usuario 5', texto: 'Comentario de prueba', fechaCreacion: new Date('2023-01-03')},
  { titulo: 'Comentario 4', creador: 'Usuario 6', texto: 'Comentario de prueba', fechaCreacion: new Date('2023-01-04')},
  { titulo: 'Comentario 5', creador: 'Usuario 7', texto: 'Comentario de prueba', fechaCreacion: new Date('2023-01-05')},
  { titulo: 'Comentario 6', creador: 'Usuario 8', texto: 'Comentario de prueba', fechaCreacion: new Date('2023-01-06')},
  { titulo: 'Comentario 7', creador: 'Usuario 9', texto: 'Comentario de prueba', fechaCreacion: new Date('2023-01-07')},
  { titulo: 'Comentario 8', creador: 'Usuario 10', texto: 'Comentario de prueba', fechaCreacion: new Date('2023-01-08')}
 ];
}
