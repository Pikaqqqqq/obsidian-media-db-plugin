import {MediaType} from '../utils/MediaType';
import {YAMLConverter} from '../utils/YAMLConverter';

export abstract class MediaTypeModel {
	type: string;
	subType: string;
	title: string;
	englishTitle: string;
	year: string;
	dataSource: string;
	url: string;
	id: string;

	userData: object;

	abstract getMediaType(): MediaType;

	abstract getTags(): string[];

	toMetaData(): string {
		return YAMLConverter.toYaml({...this.getWithOutUserData(), ...this.userData, tags: '#' + this.getTags().join('/')});
	}

	getWithOutUserData(): object {
		const copy = JSON.parse(JSON.stringify(this));
		delete copy.userData;
		return copy;
	}

}
