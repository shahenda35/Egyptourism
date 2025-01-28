export class Trip {
    constructor(public Id:number=0,
        public Trip_Name:string="",
        public trip_startdate:Date,
        public trip_returndate:Date,
        public trip_image:string="",
        public trip_cost:number=0){}
}
