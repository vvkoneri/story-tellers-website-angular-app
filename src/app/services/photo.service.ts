import { Injectable } from '@angular/core';
import { photos } from '../photos';

@Injectable({
    providedIn : 'root'
})

export class PhotoService  {
    photos;

    constructor(){
        this.photos = photos;
    }

    getPhotos() {
        return this.photos;
    }
}