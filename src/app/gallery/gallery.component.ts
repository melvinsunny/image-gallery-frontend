import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../images.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  imagesFetched = false;
  images: any;

  constructor(private imgService: ImagesService) { }

  ngOnInit(): void {
    this.imgService.fetchImages().subscribe(data => {
      this.imagesFetched = true;
      this.images = data;
    });
  }

}
