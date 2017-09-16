import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { IEmployeeModelInterface } from '../model/employee-model.interface';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';
import { Constants } from '../model/constant';

@Injectable()
export class EmployeeService {
    constants: Constants = new Constants();
    private _url = this.constants.employeeUrl;

    constructor(private _http: Http) { }

    getEmployee(): Observable<IEmployeeModelInterface[]> {
        return this._http.get(this._url)
            .map((response: Response) => <IEmployeeModelInterface[]>response.json())
            .catch(this._errorHandler);
    }

    getEmployeeById(id: string) {
        let params = new URLSearchParams();
        params.set("id", id);
        return this._http.get(this._url, { search: params })
            .map((response: Response) => response.json())
            .catch(this._errorHandler);
    }

    updateEmployee(model: IEmployeeModelInterface) {
        return this._http.put(this._url, model)
            .map(this.extractData)
            .catch(this._errorHandler);
    }

    deleteEmployee(id: string) {
        return this._http.delete(this._url + "/" + id)
            .map((response: Response) => response.json())
            .catch(this._errorHandler);
    }

    createEmployee(formData: FormData) {
        return this._http
            .post(this._url, formData)
            .map(this.extractData)
            .catch(this._errorHandler);
    }

    _errorHandler(error: Response) {
        console.error(error);
        return Observable.throw(error || "Server Error");
    }
    private extractData(res: Response) {
        let body = res.json();
        console.log("Body return: " + body + " : Body data " + body.fileName);
        return body;
    }
}