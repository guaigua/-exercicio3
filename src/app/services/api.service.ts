import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private api_key = 'THNn0l46XMw1KlASgKDqCpi1ma4jvZi8';
  
  private limit = '24';

  constructor(private http: HttpClient) { }

  getTodos(params){    
    return this.http.get ('https://api.giphy.com/v1/gifs/search?api_key='+this.api_key+'&q='+params+'&limit='+this.limit+'&offset=0&rating=g&lang=pt');
  }
 
}
