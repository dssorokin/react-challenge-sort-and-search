import React from 'react';
import SortTypeButton from '../containers/SortTypeButton';
import { searchPersonAction } from '../actions/actions';

const PersonsForm = ({ onKeyDown }) => {
	let input;
	return (
		<div>
			<input
				type="text"
				ref={node => { input = node;}}
				onKeyUp={() => onKeyDown(input.value)}
			/>
			<SortTypeButton filter={'BY_NAME'}>
				Отсортировать по имени
			</SortTypeButton>
			<SortTypeButton filter={'BY_AGE'}>
				Отсортировать по возрасту
			</SortTypeButton>
		</div>
	);
}

export default PersonsForm;
