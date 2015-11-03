'use strict';

document.querySelector('#show').addEventListener('click', function() {
	if (modal) modal.hide();
	var modal = new Modal('#modal');
	modal.show();
}, false);