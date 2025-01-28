import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cities } from '../models/cities';
import { Landmarks } from '../models/landmarks';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  private cities: Cities[] = [
    new Cities(
      1,
      'PortSaid',
      "Port Said is a city in northeastern Egypt on the Mediterranean Sea and the northern end of the Suez Canal. It is a major commercial hub for international trade. The city's economy is largely dependent on the canal, fishing, textiles, and food processing industries. Port Said is known for its cultural festivals and historical landmarks, such as the Port Said lighthouse.",
      'https://drive.google.com/uc?export=view&id=19J5No5_5aX_H5xb7HRJCVDmLM8y0BaO8'
    ),
    new Cities(
      2,
      'Aswan',
      'Aswan is situated on the east bank of the Nile River and is known for its stunning natural beauty, including the nearby Elephantine Island and the Aswan Dam. The city is also home to several historical landmarks, such as the Temple of Philae, which was built during the Ptolemaic Dynasty.',
      'https://drive.google.com/uc?export=view&id=1isKAaWNU5vSh8aptidioYOjEQW32GVp0'
    ),
    new Cities(
      3,
      'Siwa',
      'Aswan is situated on the east bank of the Nile River and is known for its stunning natural beauty, including the nearby Elephantine Island and the Aswan Dam. The city is also home to several historical landmarks, such as the Temple of Philae, which was built during the Ptolemaic Dynasty.',
      'https://drive.google.com/uc?export=view&id=1isKAaWNU5vSh8aptidioYOjEQW32GVp0'
    ),
    new Cities(
      4,
      'Dahab',
      "Port Said is a city in northeastern Egypt on the Mediterranean Sea and the northern end of the Suez Canal. It is a major commercial hub for international trade. The city's economy is largely dependent on the canal, fishing, textiles, and food processing industries. Port Said is known for its cultural festivals and historical landmarks, such as the Port Said lighthouse.",
      'https://drive.google.com/uc?export=view&id=19J5No5_5aX_H5xb7HRJCVDmLM8y0BaO8'
    ),
  ];

  getAllCities() {
    return this.cities;
  }

  getCityById(){
    
  }
  constructor() {}
}
