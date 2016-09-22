import {Component} from 'angular2/core';
import {PropertyBindingComponent} from "./property-binding.component";

@Component({
    selector: 'my-app',
    template: `
		<section class="parent">
			<h1>This is the parent</h1>
			<h4>Please enter your name</h4>
			<input 
				type="text" 
				[(ngModel)]="name"
			>
			<br>
			<p>{{name}}&nbsp;</p>

				<section class="child">
					<my-property-binding 
						[myName]="name"
						[myAge]=40
						(hobbiesChanged)="hobbies=$event"
					></my-property-binding>
				</section>

				<p>My hobbies from child are: <BR>{{hobbies}}</p> 
		</section>
    `,
	directives: [PropertyBindingComponent]
})
export class AppComponent {
	name = '';
	hobbies = '';
}