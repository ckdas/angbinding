import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
		//	:{{inpname.value}}:Cause Error in Console<BR>
    template: `
			{{'Hey'}}, 
			{{name}},
			{{onTest()}}<BR>
			<input type="text" 
				class="{{'rade'}}"
				value="{{name}}" 
				#inpname
				(keyup)="0"
			><BR>
			{{inpname.value}}
			<BR>
			<input 
				type="text"
				(keyup)="onKeydown (inputElement.value)"
				#inputElement
			>
			<BR><p>{{values}}</p>
			<BR><BR>Two Way Binding<BR>
			<input type="text" [(ngModel)]="name">
			<p>Your Name: {{name}}</p>
    `,
})
export class AppComponent {
	name = "Chiranjit";
	values = "";

	onTest() {
		return 1 === 1;
	}

	onKeydown(value: string) {
		this.values += value + ' | ';
	
	}

}