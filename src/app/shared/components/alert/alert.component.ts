import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert.component.html'
})
export class AlertComponent {
  @Input() message = '';
  @Input() type: 'success' | 'error' | 'info' = 'success';
  @Output() close = new EventEmitter<void>();

  get styles() {
    const base = 'rounded-lg p-4 flex items-center justify-between border shadow ';
    const map = {
      success: 'bg-green-50 border-green-200 text-green-800 shadow ',
      error: 'bg-red-50 border-red-200 text-red-800 shadow ',
      info: 'bg-blue-50 border-blue-200 text-blue-800 shadow ',
    };
    return `${base} ${map[this.type]}`;
  }
}
