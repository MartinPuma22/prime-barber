import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css'
})
export class Gallery {

  images = [
    {
      src: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033',
      alt: 'Corte de cabello'
    },
    {
      src: 'https://images.openai.com/static-rsc-4/w21bm--9TQ-3ErqutMINDd0Ht__CccppHu2yqShvQlrKldXENheMl6BkjOebfxXs3IY1X54Or_5FGdw9HghRFS-OH15fjGbEAWcX_SP0LhYXh-_DIbGWi0WAHMbO4APvRY0RhNkIwD6wgwHzWxZYC7O22VrCQ2uw12Hgs7TVaYEm4ugwBA_GIFaJ4oEujPkF?purpose=fullsize',
      alt: 'Barbería premium'
},
    {
      src: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1',
      alt: 'Barbero trabajando'
    },
    {
      src: 'https://images.unsplash.com/photo-1512690459411-b9245aed614b',
      alt: 'Corte masculino'
    }
  ];

}