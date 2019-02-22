import {
    Component,
    OnInit,
    Input
} from '@angular/core';
import { ExampleDef } from '../example.model';
import { Location } from '@angular/common';
import {
    Router,
    ActivatedRoute
} from '@angular/router';

@Component({
    selector: 'app-sidebar-item',
    templateUrl: './sidebar-item.component.html'
})
export class SidebarItemComponent {
    @Input('item') item: ExampleDef;

    constructor(private location: Location) { }

    isActive(): boolean {
        return `/${this.item.path}` === this.location.path();
    }
}