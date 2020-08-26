import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-curiosity-img',
  templateUrl: './curiosity-img.component.html',
  styleUrls: ['./curiosity-img.component.scss']
})
export class CuriosityImgComponent implements OnInit {
  readonly apiURL : string;
  public rota: Router;
  public imagens_curiosity_sol: any;

  constructor(private http : HttpClient, private r: Router){
    this.apiURL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY';
    this.rota = r;
  }

  ngOnInit(): void {
    //Consultando por sol marciano
    this.http.get(this.apiURL)
      .subscribe(result => {
        //console.log(result);
        this.imagens_curiosity_sol = result;
        //console.log(this.imagens_curiosity_sol.photos[0].img_src)
     })
  }

}
