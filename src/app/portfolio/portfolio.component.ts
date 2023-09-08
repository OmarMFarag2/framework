import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  flag: boolean = false;
  path: string | undefined
  check(index: number) {
    if (index == 1)
      this.path = "../../assets/port1.png"
    else if (index == 2)
      this.path = "../../assets/port2.png"
    else
      this.path = "../../assets/port3.png"
    this.flag = true;
  }
  uncheck() {
    this.flag = false;
  }
}
