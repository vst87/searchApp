import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private httpService: HttpClient) { }
  myData: object = [];
  actualData: object = [];
  searchText: string;

  ngOnInit() {
   this.getSearchData();
  }

  getSearchData(){
    this.httpService.get('https://hn.algolia.com/api/v1/search?query='+ this.searchText).subscribe(
      data => {
        this.myData = data as object[];
        this.actualData = data["hits"];
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }

}
