import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { SubjectService } from 'src/app/shared/services/subject.service';
import {Subject} from 'src/app/shared/interfaces'

@Component({
  selector: 'app-subject-page',
  templateUrl: './subject-page.component.html',
  styleUrls: ['./subject-page.component.scss']
})
export class SubjectPageComponent implements OnInit {

  isRoot: boolean
  subjects$: Observable<Subject[]>

  constructor(private subjectService: SubjectService) { }

  ngOnInit() {
    this.subjects$ =this.subjectService.getForTeacher()
  }
}
