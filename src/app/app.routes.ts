import { Routes } from '@angular/router';
import { ListComentarios } from './components/list-comentarios/list-comentarios';
import { AgregarEditarComentario } from './components/agregar-editar-comentario/agregar-editar-comentario';
import { VerComentarios } from './components/ver-comentarios/ver-comentarios';

export const routes: Routes = [
    { path: '', component: ListComentarios},
    { path: 'agregar', component: AgregarEditarComentario},
    { path: 'editar/ :id', component: AgregarEditarComentario},
    { path: 'ver/:id', component: VerComentarios},
    { path: '**', redirectTo: '', pathMatch: 'full'}
];
