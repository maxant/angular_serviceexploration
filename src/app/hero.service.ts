import { Injectable } from "@angular/core";
import { Hero } from "./hero";
import { HEROES } from "./mock-heroes";
import { OtherService } from "./other.service";
@Injectable()
export class HeroService {
  private someOtherMemberVariable1: number = 300;
  private someOtherMemberVariable2: number = 400;
  private someOtherMemberVariable3: number = 500;
  constructor(private otherService: OtherService) {}
  getHeroes() {

    // here we are testing passing a function as a parameter
    console.log("otherService: " + this.otherService);

    this.otherService.doSomethingTakingAFunctionAsAParameter(this.aFunctionToPassAsAParameter);

    const localCopy = this.someOtherMemberVariable1;
    function aLocalFunction(aTestString: string) {
      // using a field here doesnt work anyway, thats why were using a closure variable
      console.log("that worked too :-) " + aTestString + " / " + localCopy);
    }
    this.otherService.doSomethingTakingAFunctionAsAParameter(aLocalFunction);

    let aLocalArrowFunction = (aTestString: string) => {
      // no problem using member variables here, because arrow functions scope differently
      console.log("that worked three :-) " + aTestString + " / " + this.someOtherMemberVariable2);
    };
    this.otherService.doSomethingTakingAFunctionAsAParameter(aLocalArrowFunction);




    // now do what this method was designed to do and return some data
    return Promise.resolve(HEROES);
  }

  aFunctionToPassAsAParameter(aTestString: string) {
    // the following line is what causes a problem => "this" isn't "this", it's undefined, because, how do you say, the caller isn't setting the scope(?) properly.
    // console.log("that worked :-) " + aTestString + " / " + this.someOtherMemberVariable3);
    console.log("that worked :-) " + aTestString + " / "); // + someOtherMemberVariable3);
  }
}

