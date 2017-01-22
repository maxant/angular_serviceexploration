import { Injectable } from "@angular/core";

/** the idea here is to show how you can pass a method/function as a parameter => no need for self references or clever stuff */
@Injectable()
export class OtherService {

  private someMemberVariable: number = 200;

  doSomethingTakingAFunctionAsAParameter(f: (s: string) => void) {
    f("some test string + " + this.someMemberVariable);
  }
}

