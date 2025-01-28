import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Agency } from 'src/app/_models/agency';
//import { Agency } from 'src/app/_models/agency';

@Component({
  selector: 'app-agency',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.scss']
})
export class AgencyComponent {

 constructor( private router:Router){

 }
  Agency: Agency[] = [
    {
      Id: 1,
      agency_name: "Gazef",
      // trip_image: "httpspicsum.photos/200",
    },
    {
      Id: 2,
      agency_name: "Travco Holidays",
      //trip_image: "https://picsum.photos/200",
    },
    {
      Id: 3,
      agency_name: "Wild Guanabana",
      //trip_image: "https://picsum.photos/200",
    },
    {
      Id: 4,
      agency_name: "Travel Choice Egypt",
      //trip_image: "https://picsum.photos/200",
    },
    {
      Id: 5,
      agency_name: "Cultural Trip",
      //trip_image: "https://picsum.photos/200",
    },
    {
      Id: 6,
      agency_name: "Destination 31",
      //trip_image: "https://picsum.photos/200",
    },
    {
      Id: 7,
      agency_name: "Holiday Tours",
      //trip_image: "https://picsum.photos/200",
    },
    {
      Id: 8,
      agency_name: "Trippin",

    }
  ];

  navTo(url:string){
    this.router.navigateByUrl(url);
  }

}


