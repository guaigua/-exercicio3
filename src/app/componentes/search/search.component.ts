import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  imagenes: any = [];
  searchText = '';

  searchForm = new FormGroup({
    searchText: new FormControl('', Validators.required),
  });

  constructor(private apiServ: ApiService) { 
   
  }

  ngOnInit(): void {
  }
   
  onSearch(params){
    console.log(params);  
     this.apiServ.getTodos(this.searchText)
    .subscribe(imagenes => this.imagenes = imagenes);
  }
}
