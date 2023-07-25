var password = document.getElementById("password");
function genPassword() {
	var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var passwordLength = 24;
	var password = "";
	for (var i = 0; i <= passwordLength; i++) {
		var randomNumber = Math.floor(Math.random() * chars.length);
		password += chars.substring(randomNumber, randomNumber + 1);
	}
	document.getElementById("password").value = password;

}
function copyPassword() {
	if (password.value == "") {
		iziToast.warning({
			title: 'Error',
			message: 'Please generate a password.',
		});
	} else {
		var copyText = document.getElementById("password");
		copyText.select();
		copyText.setSelectionRange(0, 999);
		document.execCommand("copy");
		iziToast.success({
			title: 'Success',
			message: 'Password copied to clipboard.',
		});
	}

}