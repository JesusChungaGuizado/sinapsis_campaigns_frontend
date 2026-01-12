import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'campaigns',
        pathMatch: 'full'
    },
    {
        path: 'campaigns',
        loadComponent: () => import('./features/campaigns/campaign-list/campaign-list.component').then(m => m.CampaignListComponent)
    },
    {
        path: 'campaigns/create',
        loadComponent: () => import('./features/campaigns/campaign-create/campaign-create.component').then(m => m.CampaignCreateComponent)
    }
];
