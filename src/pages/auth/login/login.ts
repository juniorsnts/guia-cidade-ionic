import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { FormBuilder, Validators } from '@angular/forms';
import { AuthProvider } from '../../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  backgrounds = [
    'assets/imgs/background/background1.jpg',
    'assets/imgs/background/background2.jpg',
    'assets/imgs/background/background3.jpg',
    'assets/imgs/background/background4.jpg'
  ]

  loginForm: any;

  constructor(
    private loading: LoadingController,
    private authProvider: AuthProvider,
    private formBuilder: FormBuilder,
    public navCtrl: NavController, 
    public navParams: NavParams) {
      this.loginForm = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.compose([Validators.minLength(6), Validators.maxLength(20), Validators.required])]
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  goToSignup(){
    this.navCtrl.push('SignupPage');
  }

  facebookLogin(){
    let loading = this.loading.create({
      content: 'Realizando login com Facebook'
    });
    loading.present();
    this.authProvider.facebookLogin().then(()=>{
      loading.dismiss();
      alert('Login realizado');
    }, error =>{
      loading.dismiss();
      alert(JSON.stringify(error));
    });
  }

}
