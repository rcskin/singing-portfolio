document.addEventListener("DOMContentLoaded", function () {
  //Make multi-line comment forms/boxes
  //create variable to get all comment forms
  let commentForms = document.querySelectorAll(".commentForm");

  //forEach method to get relevant elements and add an event listener to the form
  commentForms.forEach(function (form) {
    //Get the comment input
    let commentInput = form.querySelector(".commentInput");
    //Get the submit button
    let submitCommentBtn = form.querySelector(".submitCommentBtn");
    //Get the element where comments will be displayed *see source 4
    let commentDisplay = form.nextElementSibling;

    //add event listener to form instead of submit button
    form.addEventListener("submit", function (e) {
      //use preventDefault to prevent form from submitting
      e.preventDefault();

      //get value of comment input
      const comment = commentInput.value;

      if (comment !== "") {
        //only add comment if it's not empty

        //create element p for comment to be displayed
        const p = document.createElement("p");
        p.innerHTML = comment;

        //append child p element to the commentDisplay element
        commentDisplay.appendChild(p);

        //empty string to clear the text box input
        commentInput.value = "";
      }
    });
  });

  //copied saved for later JS code below from Experience page
  // function to save item for later
  function saveForLater(e) {
    const item = e.target.previousElementSibling.outerHTML;
    localStorage.setItem(`saved-item-${localStorage.length + 1}`, item);
    const count = localStorage.length;
    alert(`Item saved for later! You have ${count} items saved.`);
    updateSaveCount();
  }

  // function to update the saved items count
  function updateSaveCount() {
    const count = localStorage.length;
    const saveCount = document.getElementById("saveCount");
    console.log(saveCount); // log the value of saveCount
    if (saveCount) {
      // check if saveCount is not null
      saveCount.innerText = count;
    } else {
      // log an error if saveCount is null
      console.error("saveCount is null!");
    }
  }

  // make "Save for Later" buttons functional
  const saveBtns = document.querySelectorAll(".btn-secondary");
  saveBtns.forEach((btn) => btn.addEventListener("click", saveForLater));

  // update saved items count on page load
  updateSaveCount();
});

/* 
Note to reviewer:
I wanted to leave comment boxes on the videos page aesthetically and for
functionality purposes. I have demonstrated use of HTML and JS code to 
accomplish functionality of the comments forms in task. 

I used: https://www.w3schools.com/tags/tag_textarea.asp
to help with the concept of textarea for a larger/multi-line input
I read about preventDefault() because something was happening to 
my comments when adding them and not displaying every time.
This source (1) was helpful to understand what its functionality is, and why
it is good practice to have the comment displayed before the page reloads
Sources:  
1. https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault 
2. https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events
3. https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction
4. https://developer.mozilla.org/en-US/docs/Web/API/Element/nextElementSibling
I used Prettier to format this document
*/
