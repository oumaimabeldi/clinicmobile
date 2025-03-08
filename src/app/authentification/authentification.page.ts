import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../servicesBack/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.page.html',
  styleUrls: ['./authentification.page.scss'],
  standalone:false
})
export class AuthentificationPage implements OnInit {

  formData: FormGroup;
  screen: string = 'signin';
  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(private apiService: ApiService, private fb: FormBuilder, private router:Router) {
    this.formData = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      name: ['']
    });
  }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  change(screen: string) {
    this.screen = screen;
    this.errorMessage = '';
  }

  login() {
    this.isLoading = true;
    this.errorMessage = '';
    const { email, password } = this.formData.value;
    this.apiService.login(email, password).subscribe(
      response => {
        this.isLoading = false;
        console.log('Login successful', response);
        console.log('Login successful', response);
        this.router.navigate(['/tabs']);
        // Redirigez l'utilisateur ou effectuez d'autres actions
      },
      error => {
        this.isLoading = false;
        this.errorMessage = 'Identifiants incorrects. Veuillez réessayer.';
        console.error('Login failed', error);
      }
    );
  }


  register() {
    this.isLoading = true;
    this.errorMessage = '';
    const { name, email, password } = this.formData.value;
    this.apiService.register(name, email, password).subscribe(
      response => {
        this.isLoading = false;
        console.log('Registration successful', response);
        this.screen = 'signin';
        this.errorMessage = '';
        // Redirigez l'utilisateur ou effectuez d'autres actions
      },
      error => {
        this.isLoading = false;
        this.errorMessage = 'Une erreur s\'est produite lors de l\'inscription.';
        console.error('Registration failed', error);
      }
    );
  }

  resetPassword() {
    const emailControl = this.formData.get('email');
    if (emailControl) {
      const email = emailControl.value;
      this.apiService.resetPassword(email).subscribe(
        response => {
          console.log('Reset password email sent', response);
        },
        error => {
          console.error('Reset password failed', error);
        }
      );
    } else {
      console.error('Email control not found in form');
    }
  }


}
