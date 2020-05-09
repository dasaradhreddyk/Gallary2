import { Component, OnInit, Input } from '@angular/core';
import { AdventureTimeService } from '../services/adventure-time.service';

@Component({
  selector: '[app-table-row]',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.css']
})
export class TableRowComponent implements OnInit {

  @Input() character: any;
  @Input() columns: string[];
  @Input() value:string;
  constructor(private atService: AdventureTimeService) { }

  ngOnInit() {
  }

    toggle(str)
    {
     this.atService.DeleteContent(str);
      console.log(str);
    }
}
