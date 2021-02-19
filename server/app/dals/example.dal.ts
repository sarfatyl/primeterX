import {ExampleModel} from '../models/example.model';

export class ExampleDal {

	examples: { [id: string]: ExampleModel } = {
		1: {
			id: 1,
			text: 'One'
		},
		2: {
			id: 2,
			text: 'Two'
		},
		3: {
			id: 3,
			text: 'Three'
		}
	};

	getExampleById(id: number): ExampleModel {
		const example = this.examples[id];
		if (!example) return null;
		return {...example};
	}

}
