import { Injectable } from "@angular/core";
import { Headers, Http, Response } from "@angular/http";

export class Market {
    id: string;
    name: string;
    marketValue: number;
}

const url = "rest/markets";  // URL to web api

@Injectable()
export class MarketIntegrationService {

  public isWaiting = false;

  constructor(private http: Http) { }

  getMarkets(): Promise<Market[]> {
    this.isWaiting = true;
/*
// TODO replace with http call below
    let markets = [
        {
            id: "1",
            name: "market1",
            marketValue: 100.009
        },
        {
            id: "2",
            name: null, // no name on purpose, to test using ng-if
            marketValue: 200.01
        }
    ];
    return Promise.resolve(markets); // this was the mocked response, ie using a promise with no server call
*/
    return this.http.get(url)
           .toPromise()
           .then(response => {
               this.isWaiting = false;
               console.log("got response from server: " + JSON.stringify(response));
               return response.json().data as Market[]; // see how we use "as" to clarify the types from the server :-)
           }).catch(this.handleError);
    // example of posting data:
    // let headers = new Headers({"Content-Type": "application/json"});
    // return this.http.post(url, JSON.stringify(market), {headers: headers})

    // example of typescript string replacement:
    // let url2 = `${url}/${market.id}`;
  }

  private handleError(error: any): Promise<any> {
    console.error("An error occurred", error); // TODO make nice error dialog for user
    return Promise.reject(error.message || error);
  }

}
