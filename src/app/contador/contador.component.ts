
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contador',
  imports: [CommonModule],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent implements OnInit {
  role: string = '';

  constructor(private authService: AuthService) {}

  ngOnInit() {
    // Obtener el rol del usuario desde el servicio de autenticación
    this.role = this.authService.getUserRole();
  }
}
