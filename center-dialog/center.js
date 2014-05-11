(function (win, doc) {
	var body = doc.documentElement || doc.body,
		dialog = doc.getElementById('dialog'),
		btnOk = doc.getElementById('dialog-ok'),
		btnCancel = doc.getElementById('dialog-cancel');

	// events
	btnOk.onclick = btnCancel.onclick = function () {
		dialog.style.display = 'none';
	};

	setTimeout(function () {
		dialog.style.display = 'block';
		// center dialog
		dialog.style.top = ((body.clientHeight - dialog.offsetHeight) / 2 -30) + 'px';
		dialog.style.left = ((body.clientWidth - dialog.offsetWidth) / 2) + 'px';
	}, 1680);
})(window, document);