import { Component,OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service'
import { SearchKeywordsService } from '../services/search-keywords.service';

@Component({
    selector: 'app-photo-gallery',
    templateUrl: './photo-gallery.component.html',
    styleUrls: ['./photo-gallery.component.css']
})

export class PhotoGalleryComponent implements OnInit {
    photos;
    searchParams;

    constructor(private photoservice: PhotoService, private __searchSvc: SearchKeywordsService) {
        this.photos = [];
        this.searchParams = [];
    }
    async ngOnInit() {
        let searchRecord = await this.__searchSvc.getSearchKeywords();
        if(searchRecord) {
        this.searchParams = searchRecord['search_query'].split(" ");
        }
        await this.filterPhotos()
    }

    filterPhotos() {
        if (this.searchParams.length === 0 ) {
            this.photos = this.photoservice.getPhotos()
            return;
        }
        

            let photoRecords = this.photoservice.getPhotos();
            for ( let photo of photoRecords ) {
                for (let param of this.searchParams) {
                if(photo.meta.indexOf(param) > -1) {
                    this.photos.push(photo);
                    break;
                }
            }
            }

            console.log(this.photos)
        
    }
}