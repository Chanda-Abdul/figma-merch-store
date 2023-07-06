import { Component } from '@angular/core';
import { privacyTerms } from './privacyTerms.data';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent {
 updatedLast: string =  'November 12, 2021';

 terms = privacyTerms;
}
