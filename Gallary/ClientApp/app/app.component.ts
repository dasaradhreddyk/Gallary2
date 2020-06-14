import { Component, ViewChild} from '@angular/core';
import { ModalService } from './services/modal.service';
import { AuthService } from './auth.service';
import { ShareComponent } from './share/share.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';
    public searchword: string;
    public url: string;
    public type: string;
    isAuthenticated: boolean = false;
    public userProfile: any;
    public urlEmit: string;

    @ViewChild('modal', { read: false }) modal: ShareComponent
    //public clickedEvent: Event;
    constructor(private modalService: ModalService, public auth: AuthService) {
        auth.handleAuthentication();
	}
    openModal(id: string) {
        this.modalService.open(id);
    }
	public click() {
     
	}

    childEventClicked(event: string) {
      
        this.searchword = event["searchword"] ;
        this.type = event["type"];
      
        console.log("searchword :" + event);
        console.log("type :" + this.type);
       
    }
    childEventClicked1(event: string) {

       
        this.url = event["url"];
       
        console.log("url in parent  :" + this.url);
    }

    

    openModal1() {
        this.modal.open();
    }
}
