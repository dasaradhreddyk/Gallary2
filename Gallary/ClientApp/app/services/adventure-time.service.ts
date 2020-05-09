import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { HttpClient } from '@angular/common/http'
import { CHARACTERS } from './mock-data';
import { concat } from 'rxjs';

@Injectable()
export class AdventureTimeService {

    public http: HttpClient;
    public data: WeatherForecast[];
    public videoids: any[];
    public videoids3: Observable<any[]>;

    public videoids1: string[]=[];
    public CHARACTERS: any[];
    constructor(http: HttpClient) {
        this.http = http;
        http.get < WeatherForecast[]>('/api/data/GetUserData?input=rise').subscribe
            (
            result => {
                this.data = result; 
                console.log(this.data);
                this.data.forEach(function (element) {
                    CHARACTERS.push(element);
                });
                
                CHARACTERS.push(this.data[0]);
            }, error => console.error(error));
    
    }

    getCharacters(val): Observable<WeatherForecast[]>{
        var url = "/api/data/GetUserData?input=" +val;

        this.http.get<WeatherForecast[]>(url).subscribe
            (
            result => {
                this.data = result;
                console.log(this.data);
                this.data.forEach(function (element) {
                    CHARACTERS.push(element);
                });

                CHARACTERS.push(this.data[0]);
            }, error => console.error(error));
        return Observable.of(CHARACTERS).delay(100);
  }

  getColumns(): string[]{
    return ["name", "age", "species", "occupation","info1","info2"]
  }
   //delete content 

   DeleteContent(str)
   {
             var url = "/api/data/DeleteContent?input=" + str;
            this.http.get(url).subscribe
            ( result => {
                console.log("deleted content"); 
                  });
   }


  //video data ..

    getVideodata(searchword): string[] {
        var url = "/api/data/GetVideolist?input=" + searchword;

        this.http.get<WeatherForecast1[]>(url).subscribe
            (
            result => {
                this.videoids = <WeatherForecast1[]>result;
               
                this.videoids1 = this.videoids[0];

                console.log(this.videoids1);
                console.log("getVideodata");
                
            }, error => console.error(error));
        
        return this.videoids1;
    }
    getvideodata1(searchword): Observable<any[]> {
        var url = "/api/data/GetVideolist?input=" + searchword;

        return this.http.get<any[]>(url)
            .pipe(
                product => this.videoids3 = product 
           

               
            );
    }
}

interface WeatherForecast {
    name: string;
    age: string ;
    species: number;
    occupation: string;
}
interface WeatherForecast1 {
    name: string;
   
}