export interface Campaign {
    id?: number;
    name: string;
    process_status: number;
    message_text: string;
}

export interface CreateCampaignDTO {
    user_id: number;
    name: string;
    phone_list: string;
    message_text: string;
}

export interface ProcessCampaignResponse {
    message: string;
}