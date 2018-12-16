import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component( {
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
} )
export class HeaderComponent implements OnInit
{

    @Output() headerEvent = new EventEmitter();

    constructor()
    {
    }

    ngOnInit()
    {
    }

    handleNavigation( module )
    {
        console.log(module);
        this.headerEvent.emit( module );
    }

}
