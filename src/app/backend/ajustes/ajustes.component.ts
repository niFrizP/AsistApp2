import { notificacion } from './../../models/models';
import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../services/firestore.service';
import { InteractionService } from '../../services/interaction.service';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.component.html',
  styleUrls: ['./ajustes.component.scss'],
})

export class AjustesComponent implements OnInit {
  data: notificacion = {
    profesor:{
      asignatura: '',
      seccion: 0,
      notif: '',
      profesor: '',
      id: ''}
  }

  constructor(private database: FirestoreService,
    private interaction: InteractionService) { }

  ngOnInit() {}

  nuevaNoti(){
    this.interaction.showLoading('Espere un momento')
    const path = 'Notificaciones';
    const id = this.database.getId();
    this.data.profesor.id = id;
    this.database.createDoc(this.data,path,id).then((res) => {
      console.log('Guardado Correcto',res);
      this.interaction.closeLoading();
      this.interaction.presentToast('guardado con exito');
    })
  }

}
