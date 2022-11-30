import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { InteractionService } from '../../services/interaction.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credenciales = {
    email: '',
    password: ''
  };

  constructor(private auth: AuthService,
    private interaction: InteractionService,
    private router: Router) {}


  ngOnInit() {}

  googleLogin() {}

  async login() {
    await this.interaction.showLoading('Iniciando sesión...')
    console.log(this.credenciales);
    const res = await this.auth.login(this.credenciales.email, this.credenciales.password).catch(err => {
      console.log(err)
      this.interaction.closeLoading();
      this.interaction.presentToast('Error al iniciar sesión')
      })
      if (res) {
        this.interaction.closeLoading();
        this.interaction.presentToast('Sesión iniciada correctamente')
        this.router.navigate(['/home'])

      }
  }
  

}
