import { Component, OnInit } from '@angular/core';
import { StorageService } from '../servicios/storage.service';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.scss']
})
export class NavbarAdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    cerrarSesion(){
        new StorageService().sessionDeleteAll();
        alert("Sesión cerrada");
        console.log();
    }
  

}
