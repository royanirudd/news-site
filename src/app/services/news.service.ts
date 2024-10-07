import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiKey = environment.newsApiKey;
  private apiUrl = 'https://newsapi.org/v2';

  constructor(private http: HttpClient) { }

  getTopHeadlines(category: string = ''): Observable<any> {
    const url = `${this.apiUrl}/top-headlines?country=us&category=${category}&apiKey=${this.apiKey}`;
    return this.http.get(url);
  }
}
