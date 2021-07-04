import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';

@Injectable()
export class TimingInterceptor  implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler):
  Observable<HttpEvent<any>> {
    const start = performance.now();
    const filterUrl = 'books';

    return next.handle(req)
      .pipe(
        tap((event: any) => {
          if(event.type === HttpEventType.Response
            && Boolean(event.url?.includes(filterUrl)))
          console.log(`${event.url} took ` + (performance.now() - start).toFixed(2) + 'ms');
        }),
      );
  }
}
