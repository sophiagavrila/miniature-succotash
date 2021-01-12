import { ApiService } from './../api.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  destroy$;
  products = [];
  constructor(private apiService: ApiService) { }


  ngOnInit(){

    this.apiService.sendGetRequest().subscribe((res: HttpResponse<any>)=>{  
      console.log(res);  
      this.products = res.body;  
    })  
    }

    public firstPage() {
      this.products = [];
      this.apiService.sendGetRequestToUrl(this.apiService.first).subscribe((res: HttpResponse<any>) => {
        console.log(res);
        this.products = res.body;
      })
    }
    public previousPage() {
  
      if (this.apiService.prev !== undefined && this.apiService.prev !== '') {
        this.products = [];
        this.apiService.sendGetRequestToUrl(this.apiService.prev).subscribe((res: HttpResponse<any>) => {
          console.log(res);
          this.products = res.body;
        })
      }
  
    }
    public nextPage() {
      if (this.apiService.next !== undefined && this.apiService.next !== '') {
        this.products = [];
        this.apiService.sendGetRequestToUrl(this.apiService.next).subscribe((res: HttpResponse<any>) => {
          console.log(res);
          this.products = res.body;
        })
      }
    }
    public lastPage() {
      this.products = [];
      this.apiService.sendGetRequestToUrl(this.apiService.last).subscribe((res: HttpResponse<any>) => {
        console.log(res);
        this.products = res.body;
      })
    }

}
