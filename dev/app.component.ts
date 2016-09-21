import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
		//	:{{inpname.value}}:Cause Error in Console<BR>
    template: `
			{{'Hey'}}, 
			{{name}},
			{{onTest()}}
			<input type="text" 
				class="{{'rade'}}" 
				value="{{name}}" 
				#inpname
				(keyup)="0"
			><BR>
			{{inpname.value}}
    `,
})
export class AppComponent {
	name = "Chiranjit"

	onTest() {
		return 1 === 1;
	}

}