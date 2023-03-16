//function to retrieve save for later items
function loadSavedItems() {
    const savedForLater = document.getElementById("savedForLater");
  
    // Remove any existing saved items
    savedForLater.innerHTML = "";
  
    // Loop through each saved item in localStorage 
    for (let i = 0; i < localStorage.length; i++) {

      //use storage key method to get labelled items from local storage
      const itemKey = localStorage.key(i);
      if (itemKey.startsWith("saved-item-")) {
        const item = localStorage.getItem(itemKey);
        
        //create a new div element for item
        const div = document.createElement("div");
        div.innerHTML = item;
        //append child with item
        savedForLater.appendChild(div);
      }
    }
    // Update the saved item count
    updateSaveCount();
  }
  
/* Note to reviewer:
I used the source: https://www.w3schools.com/jsref/met_storage_key.asp to 
help me better understand how I could pull items from local storage. I saw
startsWith() method being used in a comment chain on stack overflow, so
used this source to learn more about it https://www.w3schools.com/jsref/jsref_startswith.asp
*/
