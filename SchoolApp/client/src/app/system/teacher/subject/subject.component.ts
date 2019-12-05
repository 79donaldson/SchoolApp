import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SubjectService } from 'src/app/shared/services/subject.service';
import { switchMap } from 'rxjs/operators';
import { Subject } from 'src/app/shared/interfaces';
import { of, Subscription } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit, OnDestroy {

  subject: Subject
  sub: Subscription

  constructor(private route: ActivatedRoute,
              private subjectService: SubjectService) { }

  ngOnInit() {
    this.sub = this.route.params.pipe(
      switchMap((params: Params)=>{
        if(params['id']){
          return this.subjectService.getById(params['id'])
        }
        return of(null)  
      })
    ).subscribe(
      (data: Subject) => {
        if(data){
          this.subject = data
        }
      }
    )
  }

  ngOnDestroy(){
    this.sub.unsubscribe()
  }
}
