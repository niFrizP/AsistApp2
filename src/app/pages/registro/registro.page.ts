import { Component, OnInit } from '@angular/core';
import { User } from '../../models/models';
import { AuthService } from '../../services/auth.service';
import { FirestoreService } from '../../services/firestore.service';
import { InteractionService } from '../../services/interaction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  datos: User ={
    nombre: '',
    correo: '',
    password: '',
    uid: '',
    perfil: 'estudiante',
  }

  constructor(private auth: AuthService,
    private firestore: FirestoreService,
    private interaction: InteractionService,
    private Router:Router ) { }

  ngOnInit() {
  }

  async registrar(){
    this.interaction.showLoading('Registrando...');
    console.log('datos ->',this.datos);
    const res = await this.auth.registro(this.datos).catch(err => {
      this.interaction.closeLoading();
      this.interaction.presentToast('Error')
      console.log('Error');
    })
    if(res){
      console.log('Registro exitoso');
      const path = 'usuarios';
      const id = res.user.uid;
      this.datos.uid = id;
      this.datos.password = '';
      await this.firestore.createDoc(this.datos, path, id)
      this.interaction.closeLoading();
      this.interaction.presentToast('Registro exitoso 2')
      this.Router.navigate(['/login'])
    
    }
  }
}
