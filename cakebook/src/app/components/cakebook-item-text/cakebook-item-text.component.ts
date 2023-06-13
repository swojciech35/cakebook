import {Component, Input} from '@angular/core';

@Component({
  selector: 'cakebook-item-text',
  templateUrl: './cakebook-item-text.component.html',
  styleUrls: ['./cakebook-item-text.component.css']
})
export class CakebookItemTextComponent {

  @Input() description?: string;
}
