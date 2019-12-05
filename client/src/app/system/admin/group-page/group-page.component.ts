import { Component, OnInit, OnDestroy } from '@angular/core';
import { combineLatest, Subscription } from 'rxjs';

import { GroupService } from 'src/app/shared/services/group.service';
import { CourseService } from 'src/app/shared/services/course.service';

@Component({
  selector: 'app-group-page',
  templateUrl: './group-page.component.html',
  styleUrls: ['./group-page.component.scss']
})
export class GroupPageComponent implements OnInit, OnDestroy {

  sub: Subscription
  isLoaded = false;
  viewData: any = []
  hasGroups: boolean

  constructor(private groupService: GroupService,
              private courseService: CourseService) { }

  ngOnInit() {
   this.sub = combineLatest(
     this.courseService.getAll(),
     this.groupService.getAll()
   ).subscribe(
     ([courses, groups])=>{
        this.viewData = courses.map(c => ({ courseId: c._id, title: c.title, groups: []}))
        this.viewData.forEach(c =>{
              c.groups = groups.filter(g =>g.courseId._id === c.courseId)
        });
        this.hasGroups = groups.length > 0
        this.isLoaded = true
      })
  }

  ngOnDestroy(){
    if(this.sub)
    this.sub.unsubscribe()
  }
}
