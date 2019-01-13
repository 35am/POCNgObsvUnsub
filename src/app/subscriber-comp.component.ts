import { OnDestroy } from "@angular/core";
import { Subject, Observable } from "rxjs";

export abstract class SubscriberComp implements OnDestroy {

    protected _unsubscriber = new Subject();


    getObs(obs: Observable<any>): Observable<any>{
        return obs.takeUntil(this._unsubscriber);
    }

    ngOnDestroy(): void {
        this._unsubscriber.next();
        this._unsubscriber.complete();
    }

    
  }
  