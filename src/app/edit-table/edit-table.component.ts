import { Component, OnInit } from '@angular/core';
import {MockService} from '../mock.service';
import { Routes, RouterModule ,ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-table',
  templateUrl: './edit-table.component.html',
  styleUrls: ['./edit-table.component.css'],
  providers:[MockService]
})
export class EditTableComponent implements OnInit {

  constructor(public _mockservice:MockService, public _router: ActivatedRoute,public router:Router) { }
 
  employee:any={
    _id:"",
    name:"",
    designation:"",
    sallery:""
  };

  ngOnInit() {
    this._router.params.subscribe(params => {
     if(params.id){
       var obj;
       obj= this._mockservice.getEmploeeByid(params.id);
       this.employee._id=obj._id;
       this.employee.name=obj.name;
       this.employee.designation=obj.designation;
       this.employee.sallery=obj.sallery;
     }
      

    })
  }
  edit(){
    this._mockservice.editEmployee(this.employee);
    this.router.navigateByUrl("/home");
  }
  cancel(){
    this.router.navigateByUrl("/home");
  }

}
