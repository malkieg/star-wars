import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {People} from './people';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {
  baseURL = 'https://www.swapi.co/api/';

  constructor(private http: HttpClient) { }

  searchPeople(query: string): Observable<People[]> {
    return this.http.get<any>(this.baseURL + 'people/?search=' + query).pipe(
      map( response => {
        const people = [];
        response.results.map(data => people.push(new People(data)));
        return people;
      })
    );
  }
}
