import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {
  imgs = ['r1.png', 'r2.png', 'r3.png',];
  headlines = [
    'I\'m just a Guy writing HTML',
    'I\'m just a Guy writing CSS',
    'I\'m just a Guy writing JS',
    'I\'m just a Guy writing Angular'
  ]
  currentImg = 0;
  showImg = true;

  ngOnInit() {
    this.updateImage()
  }

  updateImage() {
    setInterval(() => {
      this.currentImg++
      this.currentImg = this.currentImg % this.imgs.length;
      this.showImg = false;

      setTimeout(() => {
        this.showImg = true;
      }, 1)
    }, 3000)
  }

}
