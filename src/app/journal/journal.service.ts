import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class JournalService {

    url = '/api/journal';

    constructor(private http: HttpClient) { }

    getJournal(id) {
        const endpoint = this.url + '/' + id;
        return this.http.get(endpoint);
    }

    create(journal) {
        return this.http.post(this.url, journal);
    }
}
