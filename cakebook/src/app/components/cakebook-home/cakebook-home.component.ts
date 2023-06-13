import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'cakebook-home',
  templateUrl: './cakebook-home.component.html',
  styleUrls: ['./cakebook-home.component.css']
})
export class CakebookHomeComponent implements OnInit {

  public filterTitle: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  getName($event: string): void {
    this.filterTitle = $event;
  }
}
