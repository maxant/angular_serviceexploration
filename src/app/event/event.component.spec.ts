import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Data, Router } from "@angular/router";
import { MenuModule } from "primeng/primeng";
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { EventComponent } from './event.component';
import { EventTileComponent } from './event.tile.component';

import { findFirstMenuItem, click } from "../test.help";

import * as _ from "lodash";

describe('EventComponent', () => {

  let eventComponent: EventComponent;
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
            { //mock router too!
                provide: Router,
                useValue: {
                }
            }
        ]
    });

    fixture = TestBed.createComponent(EventComponent);
    eventComponent = fixture.componentInstance;
  });

  it ('should work', () => {

    fixture.detectChanges();

    expect(eventComponent instanceof EventComponent).toBeTruthy();

    let eventTiles = fixture.debugElement.queryAll(By.css('event-tile'));
    expect(eventTiles.length).toBe(2);
    expect(eventComponent.events.length).toBe(2);

    el = eventTiles[0].query(By.css('.test-event-tile-title')).nativeElement;
    expect(el.textContent).toContain("e1");

    el = eventTiles[1].query(By.css('.test-event-tile-title')).nativeElement;
    expect(el.textContent).toContain("e2");

    let ctxMenu = eventTiles[0].query(By.css('.test-event-tile-contextmenu'));
    click(ctxMenu); //opens menu

    let openMenuItem = findFirstMenuItem(eventTiles[0], /Open/);
    click(openMenuItem);

    expect(eventTiles[0].componentInstance.openCount).toBe(1); //access the event-tile and ensure its click count was raised.
    expect(eventTiles[1].componentInstance.openCount).toBe(0); //the menu of the second event tile was never clicked
  });

});
