import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TimingInterceptor  implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler):
  Observable<HttpEvent<any>> {
    const start = performance.now();
    const filter = 'books'

    return next.handle(req).pipe(map(event => {
      if (event.type === HttpEventType.Response && event.url?.includes(filter)) {
        console.log(`${event.url} took ` + (performance.now() - start) + 'ms');
      }
      return event;
    }));
  }
}
