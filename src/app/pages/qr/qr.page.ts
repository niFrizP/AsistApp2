import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { clase } from 'src/app/models/models';
import { FirestoreService } from '../../services/firestore.service';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QRPage implements OnInit {
  qrCodeString = 'QR Mensaje';
  scannedResult: any;
  content_visibility = '';
  code: any;
  clases: any[] = [];


  constructor(
    private router:Router,
    private menu:MenuController,
    private db: FirestoreService,
    private barcodeScanner: BarcodeScanner
    ) { }

  ngOnInit() {
  }

  verMenu(){
    this.menu.open('first');
  }

  async startScan() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.code = barcodeData.text;
      this.db.getCollection<clase>('Clases').subscribe(res => {
        this.clases = res;
      });
      for(let i = 0; i < this.clases.length; i++) {
        if (this.clases[i].asignatura === this.code) {
          // order to add a new date to the array of dates and add 1 to the attendance
          let fechas = this.clases[i].fechas;
          let asistencia = this.clases[i].asistencia;
          this.db.updateDoc({
            asignatura: this.code,
            fechas: fechas.concat(new Date().toLocaleDateString()),
            asistencia: asistencia + 1,
          }, 'Clases', this.code);
          console.log('Class exists, adding attendance');
          break;
        } else if (i === this.clases.length - 1){
          this.db.createDoc({
            asignatura: this.code,
            fechas: [new Date().toLocaleDateString()],
            asistencia: 1,
          }, 'Clases', this.code);
          console.log('Class created');
          break;
        }
      }
    }).catch(err => {
        console.log('Error', err);
    });
    }   
  }


    /*try {
      const courses = await this.db.getCollection('Clases').toPromise();
      courses.forEach(course => this.clases.push(course));
    } catch (err) {
      console.error(err);
    }
    console.log(this.clases);
  }
}
    /*console.log(this.clases);
          console.log(this.clases);
          let fechas: any = this.clases.fechas;
          let asistencia: any = this.clases.asistencia;
          let data: any = {
            asignatura: this.code,
            fechas: fechas.concat(new Date()),
            asistencia: asistencia + 1,
          }
          console.log(data);
          this.db.setDoc(data, 'Clases', this.code).then((res) => {
            console.log('Asistencia añadida');
          })
          console.log('Class exists, assitance added')

        }
      else{
        //if dont existe create a new class on firebase
        let fechas: any = [new Date()];
        this.db.createDoc({
          asignatura: this.code,
          fechas: fechas,
          asistencia: 1,
        }, 'Clases', this.code);
        console.log('Class created');
      }
    }

  }
  
  





  /*this.database.createDoc(data).then((res) => {
    console.log('se a creado correctamente',res);
    this.animacion.showLoading;
    this.animacion.presentToast('Ha quedado presente');
    
  })*/








