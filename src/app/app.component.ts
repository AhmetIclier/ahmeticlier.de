import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  imgs = ['r1.png', 'r2.png', 'r3.png',]
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
