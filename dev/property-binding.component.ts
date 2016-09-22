import {Component} from 'angular2/core';
import {Input} from 'angular2/core';

@Component({
    selector: 'my-property-binding',
    template:`
        <h2>This is a child Component</h2>
        <p>Hi {{name}}, you are {{age}} years old.</p>
    `,
    inputs: ['name:myName']
})

export class PropertyBindingComponent {
    myName = '';
    @Input('myAge') age = 20;
}