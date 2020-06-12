import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-modal',
    template: `
    <div #myModal class="container">
    <div class="content">
      <p>Some content here...</p>
      <button (click)="close()">Close</button>
    </div>
    </div>
  `,
    styleUrls: ['./share.component.css']
})
export class ShareComponent {

    @ViewChild('myModal', { read: false }) modal: ElementRef;

    open() {
        this.modal.nativeElement.style.display = 'block';
    }

    close() {
        this.modal.nativeElement.style.display = 'none';
    }
}