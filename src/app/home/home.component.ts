import { AfterViewInit, Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { Cities } from '../models/cities';
import { CityService } from 'src/app/services/city.service';
import { City } from '../_models/city';
import { LandmarksService } from '../services/landmarks.service';
import { Landmarks } from '../models/landmarks';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit , OnInit{
  value = 0;
  city:Cities[]=[];
  land:Landmarks[]=[];
  constructor(public c:CityService , public l:LandmarksService){}

  ngOnInit(): void {
    this.city =this.c.getAllCities();
    this.land = this.l.getAllLandmarks();
  }
  ngAfterViewInit(): void {
    register();
    const swiperEl = document.querySelector('swiper-container') as any;
    const swiperParams = {
      slidesPerView: 1,
      pagination: {
        clickable: true,
      },
    };
    
    Object.assign(swiperEl, swiperParams);
    swiperEl.initialize();

    const landMarkSwiperEl = document.querySelector('#landmark-swiper') as any;
    const landMarkSwiperParams = {
      slidesPerView: 4,
      pagination: {
        clickable: true,
      },
    };
    Object.assign(landMarkSwiperEl, landMarkSwiperParams);
    swiperEl.initialize();
  }
}
