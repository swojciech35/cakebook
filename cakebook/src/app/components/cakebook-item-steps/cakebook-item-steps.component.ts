import {Component, Input} from '@angular/core';

@Component({
  selector: 'cakebook-item-steps',
  templateUrl: './cakebook-item-steps.component.html',
  styleUrls: ['./cakebook-item-steps.component.css']
})
export class CakebookItemStepsComponent {

  @Input() steps?: any;
}
