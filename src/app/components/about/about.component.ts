import { Component } from '@angular/core';
import { qAndA } from './questionsAndAnswers.data';
import { questionAnswer } from 'src/app/model/questionAndAnswer.model';
import { custCare } from 'src/app/model/customerCare.model';
import { customerCare } from './customerCare.data';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  qAndA: questionAnswer[] = qAndA;

  customerCare: custCare[] = customerCare;

}
