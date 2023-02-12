import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseURL: string = 'http://localhost:8000/api/';
  headers = { 'content-type': 'application/json' };

  constructor(private http: HttpClient) {
  }
}

