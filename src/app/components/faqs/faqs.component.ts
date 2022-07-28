import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bpw-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit {
  first: boolean = false;
  second:boolean = false;
  third:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
