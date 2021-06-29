import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';

@Injectable()
export class TimingInterceptor  implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler):
  Observable<HttpEvent<any>> {
    const start = performance.now();
    const filterUrl = 'books';

    return next.handle(req.clone())
      .pipe(
        filter(event => event.type === HttpEventType.Response && Boolean(event.url?.includes(filterUrl))))
      .pipe(tap((val: any) => {
        console.log(`${val.url} took ` + (performance.now() - start).toFixed(2) + 'ms');
      }));


  }
}
