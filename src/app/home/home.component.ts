import { Component, OnInit } from '@angular/core';
import {MockService} from '../mock.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[MockService]
})
export class HomeComponent implements OnInit {

  constructor(public mockservice:MockService) { }
  employeelist=[];
  selectedid="";
  searchtext="";
  ngOnInit() {
     this.emmployeeList();
  }
  selectedId(id){
     this.selectedid=id;
  }

  emmployeeList(){
    this.employeelist= this.mockservice.getEmployeeList();
    // console.log(this.employeelist);
  }

  delete(id){
  this.mockservice.deleteEmployee(this.selectedid);
  }

}
