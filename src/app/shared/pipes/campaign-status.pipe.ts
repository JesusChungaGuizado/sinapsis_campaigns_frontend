import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'campaignStatus',
  standalone: true
})
export class CampaignStatusPipe implements PipeTransform {
  transform(status: number): string {
    switch (status) {
      case 1:
        return 'Pendiente';
      case 2:
        return 'En proceso';
      case 3:
        return 'Finalizada';
      default:
        return 'Desconocido';
    }
  }
}
