import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {Output,EventEmitter} from '@angular/core';

@Component({
    selector: 'app-booking',
    templateUrl: './photo-event-booking-form.component.html',
    styleUrls: ['./photo-event-booking-form.component.css']
  })

export class BookingFormComponent implements OnInit {
    bookingForm;
    @Output() notify = new EventEmitter();
    @Input() skill;
    
    constructor(private formBuilder: FormBuilder){

    }
    ngOnInit(): void {
        this.bookingForm = this.formBuilder.group({
            'Name' : '',
            'Place' : '',
            'Event Date' : 12/11/2020,
            'Contact Number' : '8746945490',
            'Event Type' : this.skill.name
        })
    }
    

    onSubmit(customerData) {
        this.bookingForm.reset();
        window.alert("Your event booking is confirmed!!");
        this.notify.emit()
    }
}