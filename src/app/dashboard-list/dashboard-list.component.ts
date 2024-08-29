import { Component, inject, Inject, OnChanges, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-list',
  templateUrl: './dashboard-list.component.html',
  styleUrls: ['./dashboard-list.component.css']
})
export class DashboardListComponent implements OnInit {
  listdata:any;
  searchText: string = '';
  dropDownList:any;
  selectedValue:string='please select source';
  selected!: {startDate: "", endDate: ""};

  constructor(private http:HttpClient,@Inject(DOCUMENT) private document: Document,private router:Router){

  }

  ngOnInit(){
    this.http.get('https://newsapi.org/v2/everything?q=tesla&from=2024-07-29&sortBy=publishedAt&apiKey=11904a60a1774cf194b2d656f6835621').subscribe((resp)=>{
      console.log(resp)
      this.listdata = resp;  
      this.dropDownList = resp;
    })
  }


  goToUrl(url:any): void {
    console.log(url)
    window.location.href = url;
}


getList(dropDownValue:any){
  this.dropDownList = this.dropDownList
  this.selectedValue = dropDownValue.name;

this.http.get(`https://newsapi.org/v2/top-headlines?sources=${dropDownValue.name}&apiKey=11904a60a1774cf194b2d656f6835621`).subscribe((resp)=>{
  console.log(resp)
  this.listdata = resp;  
})
}


getDate(x:any){
let enddate =x.endDate.$d
let startdate =x.startDate.$d

let dy = enddate.getFullYear() + "-" + enddate.getMonth()+1 + "-"  + enddate.getDate()
let dz = startdate.getFullYear() + "-" + startdate.getMonth()+1 + "-"  + startdate.getDate()

this.http.get(`https://newsapi.org/v2/everything?q=tesla&from=${dy}&to=${dz}&sortBy=publishedAt&apiKey=11904a60a1774cf194b2d656f6835621`).subscribe((resp)=>{
  console.log(resp)
  this.listdata = resp;  
  this.dropDownList = resp;
})}



getDetails(value:any){
this.router.navigate(['/details',value])
}

}
