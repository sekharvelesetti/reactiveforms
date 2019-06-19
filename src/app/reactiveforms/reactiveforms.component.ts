import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent implements OnInit {
 studentDetails:FormGroup;
  constructor() { }

  ngOnInit() {
    this.studentDetails= new FormGroup({
      fristname: new FormControl(),
      email :new FormControl(),
      phno: new FormControl()
    });
  }
    addstudent() {
      console.log (this.studentDetails.value);
    }
}
