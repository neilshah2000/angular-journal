import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { ViewComponent } from './view/view.component';
import { JournalService } from './journal.service';

@NgModule({
    providers: [JournalService],
    declarations: [CreateComponent, ViewComponent],
    imports: [
        CommonModule,
        SharedModule,
        FormsModule
    ],
    exports: [CreateComponent]
})
export class JournalModule { }
