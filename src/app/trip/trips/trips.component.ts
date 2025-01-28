import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Trip } from 'src/app/_models/trip';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss'],
})
export class TripsComponent implements OnInit {
  trips: Trip[] = [
    {
      Id: 1,
      Trip_Name: 'Trip to Paris',
      trip_startdate: new Date('2023-07-01'),
      trip_returndate: new Date('2023-07-07'),

      trip_cost: 2000,
      trip_image: 'https://picsum.photos/200',
    },
    {
      Id: 2,
      Trip_Name: 'Beach Vacation',
      trip_startdate: new Date('2023-08-15'),
      trip_returndate: new Date('2023-08-25'),

      trip_cost: 3000,
      trip_image: 'https://picsum.photos/200',
    },
    {
      Id: 3,
      Trip_Name: 'Mountain Retreat',
      trip_startdate: new Date('2023-09-10'),
      trip_returndate: new Date('2023-09-15'),

      trip_cost: 2500,
      trip_image: 'https://picsum.photos/200',
    },
    {
      Id: 4,
      Trip_Name: 'City Exploration',
      trip_startdate: new Date('2023-10-05'),
      trip_returndate: new Date('2023-10-10'),

      trip_cost: 1800,
      trip_image: 'https://picsum.photos/200',
    },
    {
      Id: 5,
      Trip_Name: 'Cultural Trip',
      trip_startdate: new Date('2023-11-15'),
      trip_returndate: new Date('2023-11-20'),

      trip_cost: 2800,
      trip_image: 'https://picsum.photos/200',
    },
    {
      Id: 6,
      Trip_Name: 'Skiing Adventure',
      trip_startdate: new Date('2024-01-05'),
      trip_returndate: new Date('2024-01-12'),

      trip_cost: 3500,
      trip_image: 'https://picsum.photos/200',
    },
    {
      Id: 7,
      Trip_Name: 'Tropical Getaway',
      trip_startdate: new Date('2024-02-20'),
      trip_returndate: new Date('2024-02-27'),

      trip_cost: 4000,
      trip_image: 'https://picsum.photos/200',
    },
    {
      Id: 8,
      Trip_Name: 'Historical Tour',
      trip_startdate: new Date('2024-03-10'),
      trip_returndate: new Date('2024-03-18'),

      trip_cost: 3200,
      trip_image: 'https://picsum.photos/200',
    },
  ];

  constructor(private ac: ActivatedRoute) {}

  ngOnInit(): void {
    console.log(this.ac.snapshot.queryParams['searchText']);
  }

  bookTrip(trip: Trip) {
    //Call API
    //POST: /api/trips/book/{tripId}

    alert('Trip Booked Successfully');
  }
}
