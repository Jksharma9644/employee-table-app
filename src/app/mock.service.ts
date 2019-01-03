import { Injectable } from '@angular/core';
import {SharedService} from './shared.service';
@Injectable({
  providedIn: 'root'
})
export class MockService {

  constructor(public _sharedService:SharedService) { }


  getEmployeeList() {
    return this._sharedService.currentList;

  }
  getEmploeeByid(id){
    var obj= this._sharedService.currentList.find(obj=>obj._id==id);
    return obj;
  }

  editEmployee(obj){
    var array=this._sharedService.currentList;
    var index= array.findIndex(a=>a._id==obj._id);
    console.log("index",index);
    this._sharedService.currentList[index]=obj;

  }
  
  addEmployee(obj){
  this._sharedService.currentList.push(obj);
  }

 
  deleteEmployee(id){
    var array=this._sharedService.currentList;
    var index= array.findIndex(x=>x._id==id);
    this._sharedService.currentList.splice(index, 1);
  }
}
