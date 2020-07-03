import { Injectable } from '@angular/core';
import { photos } from '../constants/photos';
import { Photo } from '../interfaces/photos';

@Injectable({
    providedIn : 'root'
})

export class PhotoService  {
    photos: Photo[];

    constructor(){
        this.photos = photos;
    }

    getPhotos() {
        return this.photos;
    }
}