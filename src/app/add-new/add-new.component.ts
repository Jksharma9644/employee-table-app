import { Component, OnInit } from '@angular/core';
import { MockService} from '../mock.service';
import { Routes, RouterModule ,ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit {
  employee:any={
    _id:"",
    name:"",
    designation:"",
    sallery:""
  };

  constructor(public _mockservice:MockService, public _router: ActivatedRoute,public router:Router) { }

  ngOnInit() {
  }

  save(){
    this.employee._id=this.createId();
    this._mockservice.addEmployee( this.employee);
    this.router.navigateByUrl("/home");

  }
  cancel(){
    this.router.navigateByUrl("/home");
  }
  createId(){
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');

    if (! length) {
        length = Math.floor(Math.random() * chars.length);
    }

    var str = '';
    for (var i = 0; i < length; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
  }

}
