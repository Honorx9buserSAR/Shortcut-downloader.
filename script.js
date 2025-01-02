function redirectToConversion() {
    const url = document.getElementById('tiktok-url').value;

    if (!url) {
        alert("Please enter a TikTok video URL!");
        return;
    }

    // Redirect to SSSTik.io
    window.open(`https://ssstik.io/en`, '_blank');
}
