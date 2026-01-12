import { CommonModule } from '@angular/common';
import { Component, effect, inject, Input, Signal } from '@angular/core';
import { Message } from '../../../core/models/message.model';
import { MessageService } from '../../../core/services/message.service';
import { MessageStatusPipe } from '../../../shared/pipes/message-status.pipe';

@Component({
  selector: 'app-message-list',
  standalone: true,
  imports: [CommonModule, MessageStatusPipe],
  templateUrl: './message-list.component.html'
})
export class MessageListComponent {
  messages: Message[] = [];
  @Input({ required: true }) campaignId!: Signal<number | null>;
  private messageService = inject(MessageService);

  constructor() {
    effect(() => {
      const id = this.campaignId();
      if (id !== null) {
        this.loadMessages(id);
      }
    });
  }

  loadMessages(campaignId: number): void {
    this.messageService
      .getMessagesByCampaign(campaignId)
      .subscribe(data => this.messages = data);
  }
}
