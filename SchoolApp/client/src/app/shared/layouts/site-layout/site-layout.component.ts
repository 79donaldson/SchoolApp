import { Component, ViewChild, AfterViewInit, ElementRef, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MaterialService } from '../../classes/material.service';
import { User } from '../../interfaces';

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.scss']
})
export class SiteLayoutComponent implements OnInit, AfterViewInit {

  @ViewChild("sidenav", {static: false}) sidenavRef: ElementRef
  sidenav: any = null

  user: User = null
  links = []

  constructor(private auth: AuthService,
              private router: Router) { }
  
  ngOnInit(){
    this.user = this.auth.IdentityUser
    this.links = this.getLinksByRole(this.user.roleId)

  }
  ngAfterViewInit() {
    this.sidenav = MaterialService.initializeSidenav(this.sidenavRef, {draggable:false})
  }

  getRoleName(roleId: Number){
    switch(roleId){
      case 1: 
        return 'Адміністратор';
      case 2:
        return 'Викладач'
      case 3:
        return 'Студент'
    }
  }

  getLinksByRole(roleId: Number){
    switch(roleId){
      case 1: 
        // Адміністратор
        return [
          {title: 'Спеціальності', url: '/admin/specialty'},
          {title: 'Курси', url: '/admin/course'},
          {title: 'Групи', url: '/admin/group'},
          {title: 'Налаштування', url: '/admin/settings'},
        ];
      case 2:
        // Викладач
        return [
          {title: 'Предмети', url: '/teacher/subject'},
        ];
      case 3:
        // Студент
        return [];
    }
  }

  logout(event: Event){
    event.preventDefault()
    this.auth.logOut()
    this.router.navigate(['/auth/login'])
  }

}
