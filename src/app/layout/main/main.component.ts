import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  // tslint:disable-next-line
  selector: 'app-root',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MainComponent implements OnInit {

  constructor(
  ) {
  }

  ngOnInit() {
    // this.router.events.subscribe((event) => {
    //   if (event instanceof NavigationEnd) {
    //     // DO SOMETHING
    //   }
    // });
  }
}
