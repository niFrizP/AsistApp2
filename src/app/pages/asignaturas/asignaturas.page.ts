import { Component, OnInit } from '@angular/core';
import { clase } from 'src/app/models/models';
import { AuthService } from '../../services/auth.service';
import { FirestoreService } from '../../services/firestore.service';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.page.html',
  styleUrls: ['./asignaturas.page.scss'],
})
export class AsignaturasPage implements OnInit {
  clases: any[] = [];

  constructor(
    private authService: AuthService,
    private menu:MenuController,
    private db: FirestoreService,
    private router: Router
  ) { }

  async ngOnInit() {
    this.getClases();
  }

  verMenu(){
    this.menu.open('first');
  }

  //get all clases
  getClases(){
    this.db.getCollection<clase>('Clases').subscribe(res => {
      res.forEach(element => {
        let fecha = element.fechas[element.fechas.length - 1];
        this.clases.push({
          asignatura: element.asignatura,
          asistencia: element.asistencia,
          //get the last date of the array of dates
          fecha: fecha
        });
      });
    });
    console.log(this.clases);
  }
  getDetalle(asignatura: string){
    this.router.navigate(['/detalle'], {state: {asignatura: asignatura}});
  }
}

