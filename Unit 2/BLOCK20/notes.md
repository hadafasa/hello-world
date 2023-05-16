# AGENDA
- learning teams: connecting
- lecture
- demonstration YOUR NAME HERE
- guided practice PRICELESS ART
- introduction to workshop - FREELANCER FORUM
- learning teams concluding

=> On your Own;
- take the comptency check
- finish the workshop

# LEARNING OBJECTIVES
=> Write JavaScript code that manipulates the DOM to fulfill provided application requirements.
=> Apply JavaScript DOM selection methods and selectors to select DOM elements.
=> Modify the DOM using element properties.
=> Implement dynamic changes on user input using DOM events.
=> Create a webpage using only vanilla DOM manipulation, i.e, HTML, CSS, and JavaScript, with no additional libraries or frameworks.

# WHY DO WE NEED TO LEARN ABOUT THE DOM?

- Interactivity
- Dynamic Content
- Improved performance

# DOCUMENT OBJECT MODEL (DOM)
- programming interface web documents
- represents the document as nodes and objects
- allows programming languages to
 + interact with the page
 + change the document structure, style, and content

# DOM SELECTORS
- DOM selectors use JavaScript to select HTML elements within a document
- Ways to select elements in a DOM using selectors:
 + getElementsByTagName()
 + getElementsByClassName()
 + querySelector()
 + querySelectorAll()
 + getElementsByName()

# DOM TRAVERSAL

- Every item in the DOM is known as a node
- Only through the DOM can you manipulate your HTML document structure, content, and style

# WEB API
- The DOM is a Web API, not JavaScript
- Web APIs support complex operations that help us work with data. A browser almost always hosts Web APIs like the DOM
- JavaScript can interact with the DOM, but JavaScript can also run without touching the DOM in environments other than a browser

# DYNAMIC TEXT
- You can use JavaScript to update the DOM with dynamic data
EXAMPLE:
- Use the innerHTML property to update the contents of an element
- createElement Method: Create new elements and append them to the DOM

# DYNAMIC STYLING VIA CLASSES
- You can also apply styles on HTML elements using JavaScript
 + fonts
 + colors
 + margins
 + borders
 + background images
 + text alignment
 + width and height
All CSS attributes are accessible

# DOM TRAVERSAL AND MANIPULATIONS
- DOM manipulation = use JavaScript to add, remove, and modify elements of a website

# EVENTS
- A signal that something has occurred in the browser
EXAMPLES:
- Button Click
- Form Submission
- Timer
- Page being loaded

EVENT CAPTURING PHASE 1
DOC => HTML => BODY => DIV => BUTTON

EVENT BUBBLING PHASE 2

BUTTON => DIV => BODY => HTML => DOC

# EVENT HANDLERS
- When an event occurs, it can trigger a function, which is called an event handler
- To attach an even handler to an element in the DOM, you can use the addEventListener method

EXAMPLE
const button = document.querySelector(".btn)
button.addEventListener("click", fucntion(event) {
    console.log("Hello!");
})
//or
button.addEventListener("click", event => {
    console.log("Hello!");
})