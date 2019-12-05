import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { SharedModule } from 'src/app/shared/shared.module';
import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherComponent } from './teacher.component';
import { SubjectPageComponent } from './subject-page/subject-page.component';
import { SubjectFormComponent } from './subject-page/subject-form/subject-form.component';
import { SubjectComponent } from './subject/subject.component';

@NgModule({
    declarations: [ 
        TeacherComponent,
        SubjectPageComponent,
        SubjectFormComponent,
        SubjectComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,  
        TeacherRoutingModule,
        SharedModule      
    ]
})
export class TeacherModule{}