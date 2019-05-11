import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // baseUrl = 'https://api.nytimes.com/svc/mostpopular/v2/mostviewed/viewed/7.json?apikey=FN93uCa8WQZETF59' ;
  apiKey = 'LHJ27PV8SL2CfkGYsRkvFDANDSXePTk4';
  baseUrl = 'https://api.nytimes.com/svc/mostpopular/v2/viewed/';
  resultList: NewsData[];
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.get_products('7');
  }

  get_products(days: String): Array<NewsData> {
    this.resultList = new Array<NewsData>();
    this.httpClient.get(this.baseUrl + days + '.json?api-key=' + this.apiKey ).subscribe((res: Response) => {
        console.log(res);
        this.resultList = res.results;
        console.log(this.resultList);
    });
    return this.resultList;
}

}

export class Response {
  results: NewsData[];
}
export class NewsData {
  abstract: string;
  adx_keywords: string;
  asset_id: string;
  title: string;
  uri: string;
  url: string;
  published_date: string;

}
