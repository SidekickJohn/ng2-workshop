import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'home',
    template: 
    `
    <h1>Herzlich Willkommen</h1>
    `
})

export class HomeComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}