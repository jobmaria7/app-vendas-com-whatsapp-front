import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IonAlert, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IonAlert, IonButton],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  isAlertOpen = false;
  alertButtons = ['Action'];

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }}
