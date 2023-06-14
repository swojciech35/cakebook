import {Component, Input} from '@angular/core';

@Component({
  selector: 'cakebook-item-title',
  templateUrl: './cakebook-item-title.component.html',
  styleUrls: ['./cakebook-item-title.component.css']
})
export class CakebookItemTitleComponent {

  @Input() title?: string;
}
