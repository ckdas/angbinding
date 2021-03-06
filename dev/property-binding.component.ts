import {Component, EventEmitter} from 'angular2/core';
import {Input} from 'angular2/core';

@Component({
    selector: 'my-property-binding',
    template:`
        <h2>This is a child Component</h2>
        <p>Hi {{name}},  you are {{age}} years old.</p>
        <h4>Hobbies</h4>
        <input type="text" 
               (keyup)="onHobbiesChanged(hobbies.value)"
               #hobbies
        >
    `,
    inputs: ['name:myName'],
    outputs: ['hobbiesChanged']
})

export class PropertyBindingComponent {
    myName = '';
    @Input('myAge') age = 20;
    hobbiesChanged = new EventEmitter<string>();

    onHobbiesChanged(hobbies: string){
        this.hobbiesChanged.emit(hobbies);
    }

}