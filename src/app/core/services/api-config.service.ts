import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiConfigService {

  private readonly baseUrl = environment.apiBaseUrl;

  campaigns(): string {
    return `${this.baseUrl}/campaigns`;
  }

  campaignMessages(campaignId: number): string {
    return `${this.baseUrl}/campaigns/${campaignId}/messages`;
  }

  campaignProcess(campaignId: number): string {
    return `${this.baseUrl}/campaigns/${campaignId}/process`;
  }
}
