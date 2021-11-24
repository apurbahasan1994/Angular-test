import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private readonly titleService: Title) {
    const title = 'This is the Home Component';
    this.titleService.setTitle(title);
  }

  ngOnInit(): void {
  }

}
