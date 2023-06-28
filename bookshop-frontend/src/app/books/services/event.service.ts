import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  clearForm: EventEmitter<any> = new EventEmitter<any>();

  update: EventEmitter<any> = new EventEmitter<any>();

  delete: EventEmitter<any> = new EventEmitter<any>();
}
