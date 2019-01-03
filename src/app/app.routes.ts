import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditTableComponent } from './edit-table/edit-table.component';
import { AddNewComponent } from './add-new/add-new.component';

const appRoutes: Routes = [

    {path:'home',component:HomeComponent},
    {path:'edit/:id',component:EditTableComponent},
    {path:'addNew',component:AddNewComponent},
    { path: '**', redirectTo: 'home' }
];

export const routing = RouterModule.forRoot(appRoutes);