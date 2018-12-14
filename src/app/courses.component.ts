import { CoursesService } from './courses.service';

import { Component } from '@angular/core';

// control +` ->open terminal
//  ng g c course
// DOM : represent te structure of a document, tree of object in memory
// HTML : markup langauge that we use to represent DOM iN text
//  create a tree of object in memory they refer to DOM

@Component({
  selector: 'app-courses',
  template: `<h2>{{title}}</h2>

  <ul><li *ngFor="let course of courses">{{course}}</li></ul>

  <img src="{{imageUrl}}"/>
  <img [src]="imageUrl"/>

  <table>
    <tr>
      <td [attr.colspan]="colSpan">hi</td>
    </tr>
  </table>

  <button [style.backgroundColor]="isActive? 'blue':'white'" [class.active]="isActive">Save</button>

  <div (click)="onDivClicked()"> <button (click)="onSave($event)">Save</button></div>

  <input (keyup.enter)="onKeyUp()" />
  <input (keyup.enter)="onKeyUp2($event)" />
  <input #email (keyup.enter)="onKeyUp3(email.value)" />


  <input [value]='email2' (keyup.enter)="onKeyUp4()" />

  <input [value]='email3' (keyup.enter)="email3 =$event.target.value; onKeyUp5()" />

  <input [(ngModel)]='email6' (keyup.enter)="onKeyUp6()" />
 `
})
// property binding
// binding the object not HTML element
// when use directive you need prefix , use *
// Event bubbling bubble up the dom  tree

export class CoursesComponent {
  // should be single quote
  isActive = true;
  title = 'List of courses';
  imageUrl = 'https://loremflickr.com/320/240';
  colSpan = 2;
  courses;
  email2 = 'test@test.com';
  email3 = 'test@test2.com';
  email5 = 'test@test5.com';
  email6 = 'test@test6.com';
  // component to view, only one direction

  onDivClicked() {
    console.log('Div was clicked');
  }
  getTitle() {
    return this.title;
  }

  onKeyUp() {
    console.log('Enter was pressed');
  }

  onKeyUp2($event) {
    console.log($event.target.value);
  }

  // Simpplify my code
  onKeyUp3(email) {
    console.log(email);
  }
  // better way
  onKeyUp4() {
    console.log(this.email2);
  }
  // 2 way binding
  onKeyUp5() {
    console.log(this.email5);

  }

  onKeyUp6() {
    console.log(this.email6);

  }



  onSave($event) {
    $event.stopPropagation();
    console.log('Button was clicked', $event);
    // $event :build in event
  }

  // dependency injection:  injecting or providing the dependencies into its constructor
  constructor(service: CoursesService) {
    // const service = new CoursesService();
    this.courses = service.getCourses();

  }
  // Logic for calling an HTTP service

}
