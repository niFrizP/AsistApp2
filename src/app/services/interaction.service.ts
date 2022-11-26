import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {
  loading: any;

  constructor(private toastController: ToastController, 
              private loadingCtrl: LoadingController) { }

  async presentToast(notificacion: string){
    const toast = await this.toastController.create({
      message: notificacion,
      duration: 1500
    });
    await toast.present();
  }

  async showLoading(notificacion: string){
    this.loading = await this.loadingCtrl.create({
      message: notificacion,
      spinner: 'crescent',
    });
    await this.loading.present();
  }
  async closeLoading(){
    await this.loading.dismiss();
  }
}
