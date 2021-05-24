import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { EmployeesService } from './employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  employees: any;
  filteredEmployees: any;
  searchField = new FormControl('');
  searching = false;

  constructor(readonly employeeService: EmployeesService) { }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(employees => {
      this.employees = employees;
      this.filteredEmployees = employees;
      console.log('employees', employees);
    });

    this.searchField.valueChanges.pipe(
      tap(() => this.searching = true),
      debounceTime(300),
      distinctUntilChanged(),
    ).subscribe(searchString => {
      this.filteredEmployees = searchString.length > 1 ? this.findEmployees(searchString) : this.employees;
      this.searching = false;
    });
  }

  findEmployees(searchString: string) {
    const searchResults = this.employees.filter((employee: any) => {
      return employee?.name?.first.toLowerCase().includes(searchString.toLowerCase())
            || employee?.name?.last.toLowerCase().includes(searchString.toLowerCase());
    });
    return searchResults;
  }

  clearSearchResults() {
    this.searchField.setValue('');
    this.filteredEmployees = this.employees;
  }

}
