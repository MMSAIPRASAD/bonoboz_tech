import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  data:any;
  constructor(private activatedRoute:ActivatedRoute){

  }

  ngOnInit(){
    this.activatedRoute.params.subscribe((resp)=>{
      this.data = resp
      console.log(resp)
    })
  }
}
