import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ILanguage } from './interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _url: string = "./assets/data/languages.json";

  constructor(private http: HttpClient) { }

  getUsers(): Observable<ILanguage[]> {
    return this.http.get<ILanguage[]>(this._url);
  } 
}
