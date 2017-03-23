import { ErrorHandler } from "@angular/core";

// https://angular.io/docs/ts/latest/api/core/index/ErrorHandler-class.html
export class MyErrorHandler implements ErrorHandler {
  handleError(error: any) {
    // TODO display to user in a nice way
    console.warn("There was an error! ", error);
  }
}