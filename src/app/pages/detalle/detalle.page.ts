import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { clase } from 'src/app/models/models';
import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
  fechas: any[] = [];
  asistencia: number;
  constructor(
    private router:Router,
    private menu:MenuController,
    private db: FirestoreService
  ) { 
    
  }

  async ngOnInit() {
    this.getDetail();
  }

  verMenu(){
    this.menu.open('first');
  }

  async getDetail(){
    let asignatura = history.state.asignatura;
    this.db.getCollection<clase>('Clases').subscribe(res => {
      res.forEach(element => {
        if(element.asignatura === asignatura){
          this.asistencia = element.asistencia;
          element.fechas.forEach((fecha:any) => {
            let x = fecha.toDate() + '' + fecha.toDate().getHours() + ':' + fecha.toDate().getMinutes();
            this.fechas.push({
              fecha: x,
            });
          });
        }
      });
    });
    console.log(this.fechas);
  }
}
