import { Component } from '@angular/core';
import { callToAction } from './cta.data';

@Component({
  selector: 'app-call-to-action',
  templateUrl: './call-to-action.component.html',
  styleUrls: ['./call-to-action.component.scss']
})
export class CallToActionComponent {
  words = callToAction;
}
