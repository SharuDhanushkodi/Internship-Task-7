**HTML File sets up the structure**:
A title, a button to reload data, and a container to hold user info.
**CSS File adds styles**:
Clean layout, styled cards for each user, button styles, and error messages.
**JavaScript File does the main job**:
It fetches user data from the API using fetch().
Converts the JSON response to a JavaScript object.
Loops through each user and creates a "card" with their name, email, and address.
Appends those cards to the page.
If something goes wrong (like no internet), it shows an error message.
The Reload button allows users to refetch the data manually.
Concepts I Learn
Concept:                                Explanation:
Fetch API                               A modern way to make HTTP requests in JavaScript.
Async/Await                             Allows you to write asynchronous code that looks synchronous, making it easier to understand.
JSON Parsing	                          The API returns data in JSON format, which you convert and use in JavaScript.
DOM Manipulation                        Dynamically creating and adding HTML elements using JS.
Error Handling	                        Use try/catch to handle network errors or bad responses.
CSS Styling                             Improving layout and visual appeal using styles.
**Bonus:Testing Error Handling**
You can simulate a network error by:
Opening Chrome DevTools → Network tab.
Setting network mode to “Offline.”
Clicking the Reload button.
You’ll see a user-friendly error message, showing that error handling work.
