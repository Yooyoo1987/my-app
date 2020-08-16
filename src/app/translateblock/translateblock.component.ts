import { Component, TestabilityRegistry } from '@angular/core';
import { Proba } from './proba.model';


@Component({
    selector: 'app-translateblock',
    templateUrl: './translateblock.component.html',
    styleUrls: ['./translateblock.component.scss']
})

export class TranslateBlockComponent {

    tests: Proba[] = [
        new Proba(1, 'angol', 'english'),
        new Proba(2, 'magyar', 'hungarian'),
        new Proba(3, 'német', 'german'),
        new Proba(4, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, sequi.', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, sequi.'),
        new Proba(1, 'angol', 'english'),
        new Proba(2, 'magyar', 'hungarian'),
        new Proba(3, 'német', 'german'),
        new Proba(4, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, sequi.', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, sequi.'),
        new Proba(1, 'angol', 'english'),
        new Proba(2, 'magyar', 'hungarian'),
        new Proba(3, 'német', 'german'),
        new Proba(4, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, sequi.', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, sequi.'),
        new Proba(1, 'angol', 'english'),
        new Proba(2, 'magyar', 'hungarian'),
        new Proba(3, 'német', 'german'),
        new Proba(4, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, sequi.', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, sequi.'),
        new Proba(1, 'angol', 'english'),
        new Proba(2, 'magyar', 'hungarian'),
        new Proba(3, 'német', 'german'),
        new Proba(4, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, sequi.', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, sequi.'),
        new Proba(1, 'angol', 'english'),
        new Proba(2, 'magyar', 'hungarian'),
        new Proba(3, 'német', 'german'),
        new Proba(4, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, sequi.', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, sequi.'),
        new Proba(1, 'angol', 'english'),
        new Proba(2, 'magyar', 'hungarian'),
        new Proba(3, 'német', 'german'),
        new Proba(4, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, sequi.', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, sequi.'),
        new Proba(1, 'angol', 'english'),
        new Proba(2, 'magyar', 'hungarian'),
        new Proba(3, 'német', 'german'),
        new Proba(4, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, sequi.', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, sequi.'),
        new Proba(1, 'angol', 'english'),
        new Proba(2, 'magyar', 'hungarian'),
        new Proba(3, 'német', 'german'),
        new Proba(4, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, sequi.', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, sequi.'),
        new Proba(1, 'angol', 'english'),
        new Proba(2, 'magyar', 'hungarian'),
        new Proba(3, 'német', 'german'),
        new Proba(4, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, sequi.', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, sequi.'),
        new Proba(1, 'angol', 'english'),
        new Proba(2, 'magyar', 'hungarian'),
        new Proba(3, 'német', 'german'),
        new Proba(4, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, sequi.', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, sequi.'),
        new Proba(1, 'angol', 'english'),
        new Proba(2, 'magyar', 'hungarian'),
        new Proba(3, 'német', 'german'),
        new Proba(4, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, sequi.', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, sequi.'),
    ];

    write = false;

    writeInput(): boolean {
        if (this.write === false) {
            return this.write = true;
        } else {
            return this.write = false;
        }
    }
}

