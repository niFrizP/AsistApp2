import { Component, Input, OnInit } from '@angular/core';
import { asis, User } from '../../models/models';
import { AuthService } from '../../services/auth.service';
import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.component.html',
  styleUrls: ['./asistencia.component.scss'],
})
export class AsistenciaComponent implements OnInit {

  @Input() asistencia: User;

  constructor(private AuthService:AuthService,
    private FirestoreService:FirestoreService) { }

  ngOnInit() {
    console.log('Input ->',this.asistencia);
  }

  async asis(){
    const path = this.asistencia.uid + '/asis';
    const uid = await this.AuthService.getUid();
    const data: asis = {
      uid: uid,
      user: null,
      fecha: new Date()
    }
    this.FirestoreService.createDoc(data,path,uid);
  } 
}
