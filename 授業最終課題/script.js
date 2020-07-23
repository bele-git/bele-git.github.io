var username;
username = prompt("お名前を教えてください。");
if (username == "") {
	username = "No-Name"
}
document.getElementById('name').textContent = username;

ityped.init(document.querySelector("#ityped"), {
    strings: ['In theory, there is no difference between theory and practice. But, in practice, there is.  - Jan L. A. van de Snepscheut -'],
    typeSpeed: 100,
    loop: false,
    startDelay: 2000,
});
$(function() {
            $('html').hide().fadeIn('slow');
            });