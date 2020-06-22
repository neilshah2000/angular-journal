import { Component, OnInit } from '@angular/core';
import { JournalService } from './../journal.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-view',
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

    journal;

    constructor(
        private journalService:  JournalService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.getData();
    }

    getData() {
        const journalId = this.route.snapshot.paramMap.get('id');
        this.journalService.getJournal(journalId).subscribe((data) => {
            this.journal = data;
        }, (err) => {
            console.log(err);
        });
    }

}
