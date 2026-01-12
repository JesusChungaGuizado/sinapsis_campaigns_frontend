import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CampaignService } from '../../../core/services/campaign.service';
import { CreateCampaignDTO } from '../../../core/models/campaign.model';
import { AlertComponent } from "../../../shared/components/alert/alert.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-campaign-create',
  standalone: true,
  imports: [ReactiveFormsModule, AlertComponent, RouterLink],
  templateUrl: './campaign-create.component.html'
})
export class CampaignCreateComponent {
  private fb = inject(FormBuilder);
  private campaignService = inject(CampaignService);
  showAlert = false;

  form = this.fb.nonNullable.group({
    user_id: [1, [Validators.required]],
    name: ['', [Validators.required, Validators.minLength(3)]],
    phone_list: ['', [Validators.required, Validators.pattern(/^(\+?\d+)(,\+?\d+)*$/)]],
    message_text: ['', [Validators.required, Validators.minLength(5)]]
  });

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const payload: CreateCampaignDTO = this.form.getRawValue();

    this.campaignService.createCampaign(payload)
      .subscribe({
        next: (response) => {
          this.showAlert = true;
          this.form.reset();
        },
        error: (err) => {
          console.error('Error al crear campaña', err);
        }
      });
  }

  get f() {
    return this.form.controls;
  }

}
