import { Component, OnInit } from '@angular/core';
import { NotyService } from 'src/app/providers/noty';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(
    private noty : NotyService
  ) {}

  ngOnInit(): void {
    this.noty.pop('success', 'Heeeey', 5000);
  }

}
