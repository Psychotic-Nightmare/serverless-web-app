function fetchLambdaResponse() {
    // Make a GET request to your API Gateway endpoint
    fetch('https://tkw0n8q9ve.execute-api.us-east-1.amazonaws.com/prod/web-app')
        .then(response => response.json())
        .then(data => {
            // Parse the body to JSON and get the message
            const message = JSON.parse(data.body).message;
            // Update the content of the span element with the message
            document.getElementById('lambdaResponse').textContent = message;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Add the event listener here
document.addEventListener('DOMContentLoaded', fetchLambdaResponse);