import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { CreateComponent } from './../app/journal/create/create.component';
import { ViewComponent } from './journal/view/view.component';


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
            { path: ':id', component: ViewComponent },
        ]
    },
    { path: '**', redirectTo: 'journal' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

