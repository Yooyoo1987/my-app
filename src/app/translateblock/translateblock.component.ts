import { Component, TestabilityRegistry } from '@angular/core';
import { Proba } from './proba.model';


@Component({
    selector: 'app-translateblock',
    templateUrl: './translateblock.component.html',
    styleUrls: ['./translateblock.component.scss']
})



export class TranslateBlockComponent {

    tests: Proba[] = [
        new Proba(1, 'angol', 'english', false, false),
        new Proba(1, '', 'english', false, false),
        new Proba(1, 'angol', '', false, false),
        new Proba(1, 'angol', 'english', false, false),
        new Proba(1, 'angol', 'english', false, false),
        new Proba(1, 'angol', 'english', false, false),
        new Proba(1, 'angol', 'english', false, false),
        new Proba(1, 'angol', 'english', false, false),
        new Proba(1, 'angol', 'english', false, false),
        new Proba(1, '', 'english', false, false),
        new Proba(1, 'angol', '', false, false),
        new Proba(1, 'angol', 'english', false, false),
        new Proba(1, 'angol', 'english', false, false),
        new Proba(1, 'angol', 'english', false, false),
        new Proba(1, 'angol', 'english', false, false),
        new Proba(1, 'angol', 'english', false, false),
        new Proba(1, 'angol', 'english', false, false),
        new Proba(1, '', 'english', false, false),
        new Proba(1, 'angol', '', false, false),
        new Proba(1, 'angol', 'english', false, false),
        new Proba(1, 'angol', 'english', false, false),
        new Proba(1, 'angol', 'english', false, false),
        new Proba(1, 'angol', 'english', false, false),
        new Proba(1, 'angol', 'english', false, false),
        new Proba(1, 'angol', 'english', false, false),
        new Proba(1, '', 'english', false, false),
        new Proba(1, 'angol', '', false, false),
        new Proba(1, 'angol', 'english', false, false),
        new Proba(1, 'angol', 'english', false, false),
        new Proba(1, 'angol', 'english', false, false),
        new Proba(1, 'angol', 'english', false, false),
        new Proba(1, 'angol', 'english', false, false),

    ];


    leftRightBtn = '';
    writehere = '';
    imgPath = './assets/icons/FromLeftToRight.png';

    leftRight(): string {

        if (this.imgPath === './assets/icons/FromLeftToRight.png') {
            this.leftRightBtn = 'left-right';
            return this.imgPath = './assets/icons/FromRightToLeft.png';
        } else {
            this.leftRightBtn = '';
            return this.imgPath = './assets/icons/FromLeftToRight.png';
        }

    }
}

