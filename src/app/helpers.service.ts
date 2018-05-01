import { Injectable } from '@angular/core';

@Injectable()
export class HelpersService {

  constructor() { }
private date;
  getCurrentDate() {
    this.date = new Date();
    console.log(this.date);
    console.log(this.date.getUTCHours());
  }

}
