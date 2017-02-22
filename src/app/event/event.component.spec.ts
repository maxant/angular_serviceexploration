import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Data, Router } from "@angular/router";
import { MenuModule } from "primeng/primeng";
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { EventComponent } from './event.component';
import { EventTileComponent } from './event.tile.component';

describe('EventComponent', () => {

  let comp:    EventComponent;
  let fixture: ComponentFixture<EventComponent>;
  let des:     DebugElement[];
  let el:      HTMLElement;

  beforeEach(() => {

    TestBed.configureTestingModule({

        imports: [MenuModule],

        declarations: [EventComponent, EventTileComponent],

        providers: [
            { //use a mock activatedRoute!
                provide: ActivatedRoute,
                useValue: {
                    data: [
                        { events: [
                            {title: 'e1'},
                            {title: 'e2'}
                        ]}
                    ]
                }
            },
            {
                provide: Router,
                useValue: {
                }
            }
        ]
    });

    fixture = TestBed.createComponent(EventComponent);

    comp = fixture.componentInstance; // EventComponent test instance
  });

  it ('should work', () => {
    fixture.detectChanges();
    expect(fixture.componentInstance instanceof EventComponent).toBe(true, 'should create EventComponent');

    des = fixture.debugElement.queryAll(By.css('event-tile .test-event-tile-title'));
    expect(des.length).toBe(2);
    expect(comp.events.length).toBe(2);

    el = des[0].nativeElement;
    expect(el.textContent).toContain("e1");

    el = des[1].nativeElement;
    expect(el.textContent).toContain("e2");

    des = fixture.debugElement.queryAll(By.css('event-tile .test-event-tile-contextmenu'));
    des[0].triggerEventHandler('click', null);

    des = fixture.debugElement.queryAll(By.css('event-tile li.ui-menuitem a')); //TODO is there a better way of doing this?
    des[0].triggerEventHandler('click',
        {
            preventDefault: function(){},
            stopPropagation: function(){}
        }
    );

    des = fixture.debugElement.queryAll(By.css('event-tile'));
    expect(des[0].componentInstance.openCount).toBe(1); //access the event-tile and ensure its click count was raised.
    expect(des[1].componentInstance.openCount).toBe(0); //the menu of the second event tile was never clicked


    //TODO testing a service: get it via the injector:
    //userService = TestBed.get(UserService);
    /*
    // TwainService actually injected into the component
    twainService = fixture.debugElement.injector.get(TwainService);

    // Setup spy on the `getQuote` method
    spy = spyOn(twainService, 'getQuote')
          .and.returnValue(Promise.resolve(testQuote));

    tick();                  // wait for async getQuote
    */
  });

});
