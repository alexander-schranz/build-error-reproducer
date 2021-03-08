// @flow

import CKEditor5 from './containers/CKEditor5/CKEditor5';
import {render} from 'react-dom';

function startAdmin() {
    const applicationElement = document.getElementById('app');

    if (!applicationElement) {
        throw new Error('DOM element with ID "id" was not found!');
    }

    render(
        <CKEditor5 />,
        applicationElement
    );
}

export {
    startAdmin,
};
