import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalElegidoService {

   localStorageKey = 'localElegido';  
   localElegidoSource: BehaviorSubject<number | null>;
   localElegido$;  

  constructor() {
    const savedValue = this.getInitialValue();
    this.localElegidoSource = new BehaviorSubject<number | null>(savedValue);

    this.localElegido$ = this.localElegidoSource.asObservable();

    this.localElegidoSource.subscribe((value: number | null) => {
      if (value !== null) {
        sessionStorage.setItem(this.localStorageKey, JSON.stringify(value));
      } else {
        sessionStorage.removeItem(this.localStorageKey);
      }
    });
  }

  setLocalElegido(id: number): void {
    this.localElegidoSource.next(id);
  }

  getLocalElegido(): number | null {
    return this.localElegidoSource.getValue();
  }

  getInitialValue(): number | null {
    const savedValue = sessionStorage.getItem(this.localStorageKey);
    return savedValue !== null ? JSON.parse(savedValue) : null;
  }
}

