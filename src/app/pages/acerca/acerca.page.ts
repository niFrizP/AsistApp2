import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.page.html',
  styleUrls: ['./acerca.page.scss'],
})
export class AcercaPage implements OnInit {

  constructor(
    private router:Router,
    private menu:MenuController,) { }

  ngOnInit() {
  }

  verMenu(){
    this.menu.open('first');
  }
}
