import {Component, Input} from '@angular/core';

@Component({
  selector: 'cakebook-item-image',
  templateUrl: './cakebook-item-image.component.html',
  styleUrls: ['./cakebook-item-image.component.css']
})
export class CakebookItemImageComponent {
  @Input() image?: string;

}
