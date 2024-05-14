
window.addEventListener('cookieConsent', function (event) {
    console.log(event.detail);
    if (event.detail.hasOption('google_tagmanager')) {
        if (typeof window.analyticsLoaded === 'undefined') {
            window.analyticsLoaded = true;
/*$.getScript("test.js", function(){
    alert("Running test.js");
});*/
            $(document.body).append(`
					<script>
			// Set to the same value as the web property used on the site
			var gaProperty = 'G-3R6M7TQBJ9';
			// Disable tracking if the opt-out cookie exists.
			var disableStr = 'ga-disable-' + gaProperty;
			if (document.cookie.indexOf(disableStr + '=true') > -1) {
			  window[disableStr] = true;
			}
			// Opt-out function
			function gaOptout() {
			  document.cookie = disableStr + '=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
			  window[disableStr] = true;
			alert('Das Tracking durch Google Analytics wurde in Ihrem Browser für diese Website deaktiviert.');
			}
			</script>
		        <!-- Global site tag (gtag.js) - Google Analytics -->
		<script async src="https://www.googletagmanager.com/gtag/js?id=G-3R6M7TQBJ9"></script>
		<script>
		  window.dataLayer = window.dataLayer || [];
		  function gtag(){dataLayer.push(arguments);}
		  gtag('js', new Date());
		
		  gtag('config', 'G-3R6M7TQBJ9', { 'anonymize_ip': true });
		</script>
			`);

        }
    }


});
