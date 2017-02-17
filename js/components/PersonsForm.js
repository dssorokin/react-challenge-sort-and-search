import React from 'react';
import SortTypeButton from '../containers/SortTypeButton';

const PersonsForm = () => {
	let input;
	return (
		<div>
			<input type="text" ref={node => input = node} />
			<SortTypeButton filter={'BY_NAME'}>
				Отсортировать по имени
			</SortTypeButton>
			<SortTypeButton filte={'BY_AGE'}>
				Отсортировать по возрасту
			</SortTypeButton>
		</div>
	);
}

export default PersonsForm;