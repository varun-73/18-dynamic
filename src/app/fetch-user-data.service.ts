import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormField } from './form-field.model';

@Injectable({
  providedIn: 'root'
})
export class FetchUserDataService {

  constructor( private http:HttpClient) { }

  getData():Observable<FormField[]>{
    return this.http.get<FormField[]>('assets/form-field.json')
  }
}   