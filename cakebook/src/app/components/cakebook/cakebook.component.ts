import { Component,OnInit  } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'cakebook',
  templateUrl: './cakebook.component.html',
  styleUrls: ['./cakebook.component.css']
})
export class CakebookComponent implements OnInit {

  public items$: any;


  constructor(private service: DataService) {
  }


  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.service.getAll().subscribe(response => {
      this.items$ = response;
    });
  }

}
