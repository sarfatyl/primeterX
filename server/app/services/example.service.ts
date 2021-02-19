import {ExampleModel} from '../models/example.model';
import {ExampleDal} from '../dals/example.dal';

export class ExampleService {

	private exampleDal: ExampleDal;

	constructor(exampleDal: ExampleDal) {
		this.exampleDal = exampleDal;
	}

	getExampleById(id: number): ExampleModel {
		return this.exampleDal.getExampleById(id);
	}

}
