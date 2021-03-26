import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  private api_key = environment.giphy;

  private limit = '24';

  constructor(private http: HttpClient) { }

  getTodos(params){    
    return this.http.get ('https://api.giphy.com/v1/gifs/search?api_key='+this.api_key+'&q='+params+'&limit='+this.limit+'&offset=0&rating=g&lang=pt');
  }
 
}
