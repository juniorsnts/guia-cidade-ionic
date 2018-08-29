import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthProvider } from '../../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  backgrounds = [
    'assets/imgs/background/background1.jpg',
    'assets/imgs/background/background2.jpg',
    'assets/imgs/background/background3.jpg',
    'assets/imgs/background/background4.jpg'
  ]

  signupForm: any;

  constructor(
    private loading: LoadingController,
    private alert: AlertController,
    private authSignup: AuthProvider,
    private formBuilder: FormBuilder,
    public navCtrl: NavController, 
    public navParams: NavParams) {
      this.signupForm = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.compose([Validators.minLength(6), Validators.maxLength(20), Validators.required])],
        passwordConfirmation: ['', Validators.compose([Validators.minLength(6), Validators.maxLength(20), Validators.required])],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required]
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signup(){
    let {password, passwordConfirmation} = this.signupForm.controls;
    let passwordErrado = password.value !== passwordConfirmation.value;

    if(passwordErrado){
      const alert = this.alert.create({
        title: 'Ops :c',
        subTitle: 'A senha e a confirmação precisam ser iguais',
        buttons: ['ok']
      });
      alert.present();
    } else {
      let loading = this.loading.create({
        content: 'Criando Usuario ...'
      });
      loading.present();

      let {email, password, firstName, lastName} = this.signupForm.value;

      this.authSignup.signupUser(email, password, firstName, lastName).then(()=>{
        loading.dismiss();
        const alert = this.alert.create({
          title: 'Oba !!!',
          subTitle: 'Usuario cadastrado com sucesso',
          buttons: ['ok']
        });
        alert.present();
      }, (error)=>{
        loading.dismiss();
        const alert = this.alert.create({
          title: 'Ops :c',
          subTitle: 'Usuario nao cadastrado, tente de novo',
          buttons: ['ok']
        });
        alert.present();
      });
    }
  }

}
