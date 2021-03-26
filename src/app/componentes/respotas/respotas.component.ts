import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-respotas',
  templateUrl: './respotas.component.html',
  styleUrls: ['./respotas.component.css']
})
export class RespotasComponent implements OnInit {

  procurar: any;
  imagenes: any = [];
  parentMessage: any;
 
  

  constructor(private route: ActivatedRoute, private apiServ: ApiService) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.procurar = params['procurar'];
      this.parentMessage = params['procurar'];
      this.apiServ.getTodos(this.procurar)
      .subscribe(imagenes => this.imagenes = imagenes);
    });    
  }

  
}
