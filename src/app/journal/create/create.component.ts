import { Component, OnInit } from '@angular/core';
import { JournalService } from './../journal.service';


@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

    journalName;

    constructor(private journalService: JournalService) { }

    ngOnInit(): void {
    }

    createJournal() {
        const journal = {
            name: this.journalName
        }
        this.journalService.create(journal).subscribe((journal) => {

        }, () => {

        });
    }

    createClicked() {
        this.createJournal();
    }
}
