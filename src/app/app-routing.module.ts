import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { CreateComponent } from './../app/journal/create/create.component';


const routes: Routes = [
    {
        path: 'journal',
        component: LayoutComponent,
        children: [
            {
                path:'',
                redirectTo: 'create',
                pathMatch: 'full' 
            },
            { path: 'create', component: CreateComponent },
        ]
    },
    { path: '**', redirectTo: 'journal' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

