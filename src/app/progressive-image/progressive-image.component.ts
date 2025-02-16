import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progressive-image',
  imports: [CommonModule],
  templateUrl: './progressive-image.component.html',
  styleUrl: './progressive-image.component.scss',
})
export class ProgressiveImageComponent {
  @Input({ required: true }) imageUrl!: string;
  @Input({ required: true }) imageUrlSmall!: string;
  isLoaded: boolean = false;

  onImageLoad():void {
    this.isLoaded = true;
    console.log('image komplett geladen');
    
  }
}
