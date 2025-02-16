import { Component } from '@angular/core';
import { ProgressiveImageComponent } from './progressive-image/progressive-image.component';

@Component({
  selector: 'app-root',
  imports: [ProgressiveImageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-lazy-loading-images';
  images = Array.from({ length: 5 }, (_, i) => i);
}
