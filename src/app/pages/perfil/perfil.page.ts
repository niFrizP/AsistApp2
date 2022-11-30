import { Component, OnInit } from '@angular/core';
import { async } from '@firebase/util';
import { MenuController } from '@ionic/angular';
import { getuid } from 'process';
import { User } from '../../models/models';
import { AuthService } from '../../services/auth.service';
import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  uid: string = null;
  info: User = null;

  constructor(
    private menu: MenuController,
    private authService: AuthService,
    private FirestoreService: FirestoreService
  ) { }

  ngOnInit() {
    console.log('PerfilPage');
    this.getUid();
    this.authService.stateUser().subscribe(res => {
      console.log('perfil en auth', res);
    })
  }

  async getUid(){
    const uid = await this.authService.getUid();
    if(uid){
      this.uid = uid;
      console.log('uid-> ', this.uid);
      this.getInfo();}
    else{
      console.log('no existe uid');
    }
  }
  getInfo(){
    const path = 'usuarios';
    const id = this.uid;
    this.FirestoreService.getDoc<User>(path, id).subscribe(res => {
      if(res){
        this.info = res;
        console.log('info-> ', this.info);
      }
    })
  }
  verMenu(){
    this.menu.open('first');
  }
}
