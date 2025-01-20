import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  userData: any;

  ngOnInit(): void {
    this.fetchUserData();
  }

  async fetchUserData() {
    const token = localStorage.getItem('token');
    if (!token) {
      window.location.href = '/login'; // Redirigir al login si no hay token
    }

    try {
      const response = await axios.get('http://localhost:3000/dashboard', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      this.userData = response.data;
    } catch (error) {
      console.error('Error fetching user data:', error);
      window.location.href = '/login'; // Redirigir al login si el token es inválido
    }
  }
}

