import { Component } from '@angular/core';
import { QRCodeComponent } from 'angularx-qrcode';

@Component({
  selector: 'app-contact',
  imports: [QRCodeComponent],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {}