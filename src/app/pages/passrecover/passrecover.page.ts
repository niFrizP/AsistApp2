import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-passrecover',
  templateUrl: './passrecover.page.html',
  styleUrls: ['./passrecover.page.scss'],
  providers:[ AuthService ]
})
export class PassrecoverPage implements OnInit {

  constructor(public AuthService: AuthService) { }

  ngOnInit() {
  }

  onReset(email: string){
    this.AuthService.PasswordRecover(email);
  }

}
