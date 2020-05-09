import { Component } from '@angular/core';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';
    public searchword: string;
    public type: string;
    isAuthenticated: boolean = false;
    public userProfile: any;
    //public clickedEvent: Event;
	constructor() {
	}

	public click() {
     
	}

    childEventClicked(event: string) {
      
        this.searchword = event["searchword"] ;
        this.type = event["type"];

        console.log("searchword :" + event);
        console.log("type :" + this.type);
    }
}
