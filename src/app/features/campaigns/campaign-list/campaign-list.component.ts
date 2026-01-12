import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Campaign } from '../../../core/models/campaign.model';
import { CampaignService } from '../../../core/services/campaign.service';
import { CampaignStatusPipe } from '../../../shared/pipes/campaign-status.pipe';
import { ModalComponent } from "../../../shared/components/modal/modal.component";
import { MessageListComponent } from "../../messages/message-list/message-list.component";
import { RouterLink } from '@angular/router';
import { AlertComponent } from "../../../shared/components/alert/alert.component";

@Component({
  selector: 'app-campaign-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CampaignStatusPipe, ModalComponent, MessageListComponent, RouterLink, AlertComponent],
  templateUrl: './campaign-list.component.html',
})
export class CampaignListComponent {
  campaigns: Campaign[] = [];
  openModal = false;
  processCampaignAlert = {
    visible: false,
    message: '',
  };
  campaignId = signal<number | null>(null);

  private campaignService = inject(CampaignService);
  private fb = inject(FormBuilder);

  form = this.fb.group({
    startDate: ['2024-01-01'],
    endDate: ['2026-01-12']
  });

  constructor() {
    this.loadCampaigns();
  }

  loadCampaigns(): void {
    const { startDate, endDate } = this.form.value;
    this.campaignService.getCampaigns(startDate!, endDate!).subscribe(data => this.campaigns = data);
  }

  processCampaign(campaignId: number): void {
    this.campaignService.createProcessCampaign(campaignId).subscribe({
      next: (response) => {
        this.processCampaignAlert.visible = true;
        this.processCampaignAlert.message = response.data.message;
        this.loadCampaigns();
      },
      error: (err) => {
        console.error('Error al procesar campaña', err);
      }
    }
    );
  }

  openModalCampaign(campaignId: number): void {
    this.openModal = true;
    this.campaignId.set(campaignId);
  }

}
