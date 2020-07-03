import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[searchAnalyzeContent]'
})

export class SearchQueryContentDirective {

    
    constructor(private _elementRef: ElementRef){
        console.log(this._elementRef)
    }
}


