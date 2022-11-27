import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AuthService } from './services/auth.service';
import { InteractionService } from './services/interaction.service';
import { FirestoreService } from './services/firestore.service';
import { User } from './models/models';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  login: boolean = false;
  rol: 'estudiante' | 'profesor' = 'estudiante';

  constructor(private menu: MenuController,
    private auth: AuthService,
    private interaction: InteractionService,
    private Router: Router,
    private firestore: FirestoreService) {
      this.auth.stateUser().subscribe(res => {
        if(res){
          console.log('Login: ON')
          this.login = true;
          this.getDatosUser(res.uid)
        }else{
          console.log('Login: OFF')
          this.login = false;
        }
      })
    }
  cerrarMenu(){
    this.menu.close('first');
  }
  logout(){
    this.auth.logout();
    this.interaction.presentToast('Sesión cerrada');
    this.Router.navigate(['/home'])
  }
  getDatosUser(uid: string){
    const path = 'usuarios';
    const id = uid;
    this.firestore.getDoc<User>(path, id).subscribe(res => {
      console.log('datos -> ',res);
      if(res){
        this.rol = res.perfil;
      }
    })
  }
}
