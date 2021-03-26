import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchText = '';

  @Input() childMessage: string;

  constructor() { }

  ngOnInit(): void {
  }

  retornar(){
    location.href = `/search/${this.searchText}`;
   
  }
}
