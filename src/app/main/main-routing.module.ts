import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                children: [
                    {
                        path: 'dashboard',
                        loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
                        data: { permission: 'Pages.Tenant.Dashboard' },
                    },
                    {
                        path: 'easylab',
                        loadChildren: () => import('./easylab/easylab.module').then(m => m.EasyLabModule),
                        data: { permission: 'Pages.Tenant.EasyLab' }
                    },
                    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
                    { path: '**', redirectTo: 'dashboard' },
                    
                ],
            },
        ]),
    ],
    exports: [RouterModule],
})
export class MainRoutingModule {}
