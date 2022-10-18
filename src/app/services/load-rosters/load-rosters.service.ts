import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadRostersService {

constructor(private httpClient: HttpClient) {}
// { person: {id: number}, jerseyNumber: string, position: { type: string} }
// <{ roster: Array<{ person: {id: number}, jerseyNumber: string, position: { type: string} }> }>
// x => x.roster.map(y => {
//     person: {id: y.person.id},
//     jerseyNumber: y.jerseyNumber,
//     position: {type: y.position.type},  }

  getRosters(): Observable<any> {
    // return new Observable<any>;
    var nflRoster = 'https://statsapi.web.nhl.com/api/v1/teams/29/roster';
    return this.httpClient.get<any>(nflRoster).pipe(
      tap(console.log)
      // tap(x => console.log(x))
    );
  }


}
