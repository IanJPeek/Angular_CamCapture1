import { Component, ViewChild, ElementRef, OnInit, Renderer2 } from '@angular/core';

//tutorial from https://www.dev6.com/angular/capturing-camera-images-with-angular/



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
@ViewChild('video', {static:true}) videoElement: ElementRef;
  @ViewChild('canvas', { static: true }) canvas: ElementRef;

  title = 'capture';
}


// May need to be in CSS?

// constructor(private renderer: Renderer2) { }