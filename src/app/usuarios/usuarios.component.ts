import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css',
  host: { '[attr.id]': '"usuarios-component"' }
})
export class UsuariosComponent implements OnInit {
  roles: any[] = [];
  nuevoUsuario = { nombre: '', id_rol: null };

  async ngOnInit() {
    // Obtener los roles desde el backend
    const response = await axios.get('http://localhost:3000/roles');
    this.roles = response.data;
  }

  async crearUsuario() {
    // Enviar los datos del nuevo usuario al backend
    await axios.post('http://localhost:3000/usuarios', this.nuevoUsuario);
    alert('Usuario creado');
  }
}
