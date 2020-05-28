import {Component, OnInit} from '@angular/core';
import {Input} from '@angular/core';

@Component({
    selector : 'app-event-book',
    templateUrl: './photo-event-booking.component.html',
    styleUrls: ['./photo-event-booking.component.css']
})

export class PhotoEventBooking implements OnInit {
    
    @Input() skill
    activateForm;

    ngOnInit(): void {
        this.activateForm = null;
    }

    activate() {
        this.activateForm = true;
    }

    deactivate() {
        this.activateForm = null;
    }
}