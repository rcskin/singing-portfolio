//copied saved for later JS code below from Experience page

document.addEventListener('DOMContentLoaded', function() {
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
    const saveCount = document.getElementById('saveCount');
    saveCount.innerText = count;
  }
  
  // make "Save for Later" buttons functional
  const saveBtns = document.querySelectorAll('.btn-secondary');
  saveBtns.forEach(btn => btn.addEventListener('click', saveForLater));
  
  // update saved items count on page load
  updateSaveCount();
});