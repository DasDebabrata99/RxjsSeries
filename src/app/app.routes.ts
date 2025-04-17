import { Routes } from '@angular/router';
import { PromiseComponent } from './promise/promise.component';
import { AppComponent } from './app.component';
import { ObservableComponent } from './observable/observable.component';
import { ListComponent } from './observable/list/list.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { OfFromComponent } from './observable/of-from/of-from.component';
import { ToArrayComponent } from './observable/to-array/to-array.component';
import { CustomComponent } from './observable/custom/custom.component';
import { DebounceTimeComponent } from './observable/debounce-time/debounce-time.component';

export const routes: Routes = [
    { path:"promise", component: PromiseComponent},
    { path: "observable", component: ObservableComponent,
        children:[
            {path:"", component: ListComponent},
            {path:"from-event", component: FromEventComponent},
            {path:"interval", component: IntervalComponent},
            {path:"of-from", component: OfFromComponent},
            {path:"to-array", component: ToArrayComponent},
            {path:"custom", component: CustomComponent},
            {path:"debounce", component: DebounceTimeComponent},

        ]
    }
];
