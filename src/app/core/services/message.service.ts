import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiConfigService } from './api-config.service';
import { map, Observable } from 'rxjs';
import { Message } from '../models/message.model';
import { ApiResponse } from '../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(
    private http: HttpClient,
    private api: ApiConfigService
  ) { }

  getMessagesByCampaign(campaignId: number): Observable<Message[]> {
    return this.http
      .get<ApiResponse<Message[]>>(this.api.campaignMessages(campaignId))
      .pipe(map(response => response.data));
  }
}
