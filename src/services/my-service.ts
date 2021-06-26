import { from, Subject } from "rxjs";
import { tap } from "rxjs/operators";

export class MyService {
  private _reset$ = new Subject<void>();
  private _remoteData$ = new Subject<string>();

  // Stream APIs
  public readonly reset$ = this._reset$.asObservable();
  public readonly remoteData$ = this._remoteData$.asObservable();

  // Method APIs
  public reset = () => {
    this._reset$.next();
  };
  public callRemoteAPI = (input: string) => {
    from(this._fetchData(input))
      .pipe(
        tap({
          next: (resp) => this._remoteData$.next(resp),
          error: (err) => this._remoteData$.error(err),
        })
      )
      .subscribe();
  };

  // Method to simulate a remote REST call
  private _fetchData = (input: string) => {
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        const rndInt = Math.floor(Math.random() * 100) + 1;
        resolve(`now the response to "${input}" is ${rndInt}`);
      }, 300);
    });
  };
}
