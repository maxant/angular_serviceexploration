import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import * as _ from "lodash";

/** @return the first menu item which matches the regExp or undefined. designed to work with primeng p-menu.  */
export function findFirstMenuItem(debugElement: DebugElement, regExp: RegExp): DebugElement {
    let items = _.filter(debugElement.queryAll(By.css('.ui-menuitem-link')), e => regExp.test(e.nativeElement.innerText));
    return items[0];
}

/** triggers the click event handler on the given item passing an event which contains
    preventDefault and stopPropagation functions, which do absolutely nothing! */
export function click(item: DebugElement) {
    item.triggerEventHandler('click',
        {
            preventDefault: function(){},
            stopPropagation: function(){}
        }
    );
}