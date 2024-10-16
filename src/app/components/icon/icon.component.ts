import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.css'
})
export class IconComponent {
  @Input() iconName!: string;

  get iconUrl(): string {
    return `assets/icons/${this.iconName}.png`;
  }

}
