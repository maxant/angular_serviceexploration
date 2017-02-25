import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventService, EventModel } from './event.service';

import * as _ from "lodash";

describe('EventService', () => {

  let service: EventService;

  //since angular injection works via constructors just build up a service hierarchy as required, e.g. with mocks/stubs where necessary.
  beforeEach(() => service = new EventService());

  it ('should validate negative', () => {

    //given
    let events = [
        {title: undefined},
        {title: ""},
        {title: "asdf", date: new Date("2015-10-12") }
    ];

    //when
    let result = service.validate(events);

    //then
    expect(result.length).toBe(2);
    expect(result[0]).toBe("ch.maxant.tullia.event.validation.error.4553.invalid.name");
    expect(result[1]).toBe("ch.maxant.tullia.event.validation.error.4553.invalid.name");
  });

});
