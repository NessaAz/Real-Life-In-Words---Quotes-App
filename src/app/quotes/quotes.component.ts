import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: Quotes [] = [
    new Quotes(1, 'Shine like the whole universe is yours! - Anon', 0, 0),
    new Quotes(2, 'Some of your best days have not even happened yet - Anne Frank', 0, 0),
    new Quotes(3, 'The Sun will rise and we will try again - 21  PILOTS', 0, 0),
  ] 
  constructor() { }

  ngOnInit(): void {
  }

}
