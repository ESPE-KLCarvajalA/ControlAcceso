import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;
  private userRole: string = ''; // Guardará el rol del usuario

  constructor() { }

  // Simulación de un proceso de login
  login(username: string, password: string): boolean {
    // Aquí podrías conectar con un backend para verificar el usuario
    if (username === 'contador' && password === 'password123') {
      this.isAuthenticated = true;
      this.userRole = 'Contador'; // Asignamos el rol al usuario autenticado
      return true;
    }
    return false;
  }

  // Método para obtener el rol del usuario
  getUserRole(): string {
    return this.userRole;
  }

  // Método para verificar si el usuario está autenticado
  isUserAuthenticated(): boolean {
    return this.isAuthenticated;
  }

  // Método de logout
  logout(): void {
    this.isAuthenticated = false;
    this.userRole = '';
  }
}
