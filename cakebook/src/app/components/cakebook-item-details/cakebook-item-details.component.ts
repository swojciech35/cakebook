import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from "../../services/data.service";
import {AuthService} from "../../services/auth.service";
@Component({
  selector: 'app-cakebook-item-details',
  templateUrl: './cakebook-item-details.component.html',
  styleUrls: ['./cakebook-item-details.component.css']
})
export class CakebookItemDetailsComponent  implements OnInit {
  public image: string = '';
  public title: string = '';
  public description:string=''
  public ingredients$: any;
  public steps$:any;
  public id: string = '';


  constructor(private service: DataService, private route: ActivatedRoute, public authService:AuthService) {
  }

  ngOnInit() {
    let id: string = '';
    this.route.paramMap
      .subscribe((params: any) => {
        id = params.get('id');
      });

    this.service.getById(id).subscribe((res: any) => {
      this.image = res['image'];
      this.title = res['title'];
      this.ingredients$=res['ingredients'];
      this.steps$=res['steps']
      this.description=res['description']
      this.id=res['id']

    });

  }

  deletePost() {
    let id: string = '';
    this.route.paramMap
      .subscribe((params: any) => {
        id = params.get('id');
      });
    this.service.deleteById(id).subscribe();


  }
}
