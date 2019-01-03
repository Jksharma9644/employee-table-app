import { Injectable } from '@angular/core';
import { employee } from './modal/employee-list';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

public currentList=employee;

  constructor() { }
}
