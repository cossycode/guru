import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Qas } from './qas';
import { MessageService } from './message.service';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class QasService {

    private qasUrl = 'api/qas';

    constructor(
        private http: HttpClient,
        private messageService: MessageService) { }

    /** GET qas from the server */
    getQas(): Observable<Qas[]> {
        return this.http
            .get<Qas[]>(this.qasUrl)
            .pipe(tap(_ => this.log('fetched qas')),
                  catchError(this.handleError<Qas[]>('getQas', []))
            );
    }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a QasService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`QasService: ${message}`);
  }
}
