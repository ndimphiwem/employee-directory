import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  apiPath = environment.api.employees;
  constructor(readonly http: HttpClient) { }

  getEmployees() {
    const url = `${this.apiPath}/api/?results=20&seed=employees&exc=login`;
    return this.http.get(url).pipe(
      map((employees: any) => employees.results)
    );
  }
}
