import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
    declarations: [HeaderComponent, LayoutComponent, FooterComponent],
    imports: [
        CommonModule,
        RouterModule,
        MatToolbarModule
    ],
    exports: [LayoutComponent]
})
export class LayoutModule { }
