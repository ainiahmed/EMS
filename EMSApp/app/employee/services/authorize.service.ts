import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { UserModel } from '../model/user-model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';
import { Constants } from '../model/constant';

@Injectable()
export class Authorize {
    constants: Constants = new Constants();
    private _url = this.constants.authorizeUrl;

    constructor(private _http: Http) { }

    authorizeUser(model: UserModel) {
        return this._http.post(this._url, model)
            .map((response: Response) => response.json())
            .catch(this._errorHandler);
    }
    _errorHandler(error: Response) {
        console.error(error);
        return Observable.throw(error || "Server Error");
    }
}