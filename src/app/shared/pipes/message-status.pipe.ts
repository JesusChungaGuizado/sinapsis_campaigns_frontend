import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'messageStatus',
  standalone: true
})
export class MessageStatusPipe implements PipeTransform {
  transform(status: number): string {
    switch (status) {
      case 1:
        return 'Pendiente';
      case 2:
        return 'Enviado';
      case 3:
        return 'Error';
      default:
        return 'Desconocido';
    }
  }
}
