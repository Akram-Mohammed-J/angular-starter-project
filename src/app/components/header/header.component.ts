import { Component, OnInit } from '@angular/core';
import { faBars} from '@fortawesome/free-solid-svg-icons';
import { faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
title:string = 'Task Tracker';
faTimes=faTimes;
 faBars = faBars;
   isShowIcon = true;
  constructor() { }
  toggler=()=>{
  this.isShowIcon=!this.isShowIcon
  }
  ngOnInit(): void {
  }

}
