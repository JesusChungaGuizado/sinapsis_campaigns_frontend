import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiConfigService } from './api-config.service';
import { Campaign, CreateCampaignDTO, ProcessCampaignResponse } from '../models/campaign.model';
import { map, Observable } from 'rxjs';
import { ApiResponse } from '../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {
  constructor(
    private http: HttpClient,
    private api: ApiConfigService
  ) { }

  getCampaigns(start?: string, end?: string): Observable<Campaign[]> {
    let params = new HttpParams();
    if (start) params = params.set('startDate', start);
    if (end) params = params.set('endDate', end);

    return this.http
      .get<ApiResponse<Campaign[]>>(this.api.campaigns(), { params })
      .pipe(map(response => response.data));
  }

  createCampaign(campaign: CreateCampaignDTO): Observable<ApiResponse<CreateCampaignDTO>> {
    return this.http.post<ApiResponse<CreateCampaignDTO>>(this.api.campaigns(), campaign);
  }

  createProcessCampaign(campaignId: number): Observable<ApiResponse<ProcessCampaignResponse>> {
    return this.http.post<ApiResponse<ProcessCampaignResponse>>(this.api.campaignProcess(campaignId), null);
  }

}
