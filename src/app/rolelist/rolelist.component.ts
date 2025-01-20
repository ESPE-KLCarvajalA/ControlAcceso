import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-rolelist',
  imports: [CommonModule, FormsModule],
  templateUrl: './rolelist.component.html',
  styleUrl: './rolelist.component.css'
})
export class RolelistComponent implements OnInit {
  roles: any[] = [];

  ngOnInit(): void {
    this.fetchRoles();
  }

  async fetchRoles() {
    try {
      const response = await axios.get('http://localhost:3000/roles');
      this.roles = response.data;
    } catch (error) {
      console.error('Error fetching roles:', error);
    }
  }
}
