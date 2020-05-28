import { Component,OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service'

@Component({
    selector: 'app-photo-gallery',
    templateUrl: './photo-gallery.component.html',
    styleUrls: ['./photo-gallery.component.css']
})

export class PhotoGalleryComponent implements OnInit {
    photos;
    constructor(private photoservice: PhotoService) {}
    ngOnInit(): void {
        this.photos = this.photoservice.getPhotos()
    }
}