import { Component } from '@angular/core';
import axios from 'axios';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  async login() {
    try {
      const response = await axios.post('http://localhost:3000/login', {
        nombre_usuario: this.username,
        contrasena: this.password
      });
      localStorage.setItem('token', response.data.token);
      this.errorMessage = '';
      window.location.href = '/dashboard'; // Redirigir al dashboard
    } catch (error) {
      this.errorMessage = 'Credenciales inválidas';
    }
  }
}