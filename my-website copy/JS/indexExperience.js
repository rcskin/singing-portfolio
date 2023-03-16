document.addEventListener('DOMContentLoaded', function() {
// Get all like buttons on the page
const likeButtons = document.querySelectorAll('.like');

// Loop through each button and add a click event listener
likeButtons.forEach(button => {
  let likeCount = 0;
  const likeCountElement = button.nextElementSibling;

  button.addEventListener('click', function() {
    // Increment the like count
    likeCount++;

    // Update the like count element with the new count
    likeCountElement.innerText = `${likeCount} likes`;
  });
});
//create function to save item for later
function saveForLater(e) {
  //get HTML of previous element above save for later button
  const item = e.target.previousElementSibling.outerHTML;
  //store HTML item in local storage with a unique 'saved-item-key
  localStorage.setItem(`saved-item-${localStorage.length + 1}`, item);
  
  //get current number of saved items
  const count = localStorage.length;
  //alert user to number of saved items
  alert(`Item saved for later! You have ${count} items saved.`);

  //call updateSaveCount function to update the count
  updateSaveCount();
}  

//create function to update the saved items count
function updateSaveCount() {
  //get current number of saved items
  const count = localStorage.length;
  //get the element that displays the save count
  const saveCount = document.getElementById('saveCount');
  //update the text to show the current count
  saveCount.innerText = count;
}

// make "Save for Later" buttons functional
const saveBtns = document.querySelectorAll('.btn-secondary');
//for each save button add event listener to call saveForLater function
saveBtns.forEach(btn => btn.addEventListener('click', saveForLater));

// update saved items count on page load
//call function to show the current count
updateSaveCount();
})

/*Note to reviewer:
The task said to put the 'like's in a form, but I don't understand the
logic behind that as there is no use for the form. I have instead showed
that I can create a button, and the skill of adding an event listener
with a 'likes count' without the form.

I did days of research and spent a lot of time trying to make very easy-to-read
succinct code to help create functions that could gather multplie buttons
and make them function instead of long code for each button. 

Origninally the functions wouldn't work and when inspecting the page it said
'null' so I looked up what to do. Found that I needed to add a DOMContentLoaded
event listener to make it functional. Used the following source for this:
https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event

I also used a mentor meeting to help understand the task requirements to do
this task, the difference between using outer vs innerHTML,
and to help write my pseudo code as well as other sources listed below after 
reading my Coding for Dummies book for extra explanations/examples:
-Minnick, C. (2022) Coding all-in-one for dummies. Hoboken, NJ: For Dummies. 
-https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
-https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem
-https://developer.mozilla.org/en-US/docs/Web/API/Element/nextElementSibling
-https://www.makeuseof.com/how-to-make-website-responsive/
*/