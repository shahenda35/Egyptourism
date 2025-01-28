import { Component, Input, OnInit } from '@angular/core';
import { Landmarks } from './../../models/landmarks';
import { CityService } from 'src/app/services/city.service';
import { ActivatedRoute, Params } from '@angular/router';
import { LandmarksService } from 'src/app/services/landmarks.service';
@Component({
  selector: 'app-landmarks',
  templateUrl: './landmarks.component.html',
  styleUrls: ['./landmarks.component.scss'],
})
export class LandmarksComponent implements OnInit {
  constructor(public cserv: CityService, private route: ActivatedRoute , public l:LandmarksService) {}

  lands:Landmarks[]=[];

  FilterLandMarks: Landmarks[] = [];
  cId: number | undefined;
  ngOnInit(): void {
    this.lands = this.l.getAllLandmarks();
    this.route.params.subscribe((params: Params) => {
      // console.log(params)
      this.cId = params['id'];
      this.FilterLandMarks = this.lands.filter((i) => i.cityId == this.cId);
    });
  }
}
