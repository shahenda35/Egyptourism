import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Cities } from 'src/app/models/cities';
import { Landmarks } from 'src/app/models/landmarks';
import { CityService } from 'src/app/services/city.service';
import { LandmarksService } from 'src/app/services/landmarks.service';

@Component({
  selector: 'app-showcity',
  templateUrl: './showcity.component.html',
  styleUrls: ['./showcity.component.scss']
})
export class ShowcityComponent implements OnInit {
  FilterLandMarks: Landmarks[] = [];
  lands: Landmarks[] = [];
  cId: number | undefined;
  city: Cities[] = [] ;
  constructor(public l:LandmarksService ,public cserv: CityService, private route: ActivatedRoute){}
  
  ngOnInit(): void {
    this.city = this.cserv.getAllCities();
    this.lands = this.l.getAllLandmarks();
    this.route.params.subscribe((Params:Params)=>{
      this.cId = Params['id'];
      this.FilterLandMarks = this.lands.filter((i)=>i.cityId == this.cId);
    })
  }
}
