let allBoldItems
function getBoldItems(){
    allBoldItems=document.querySelectorAll("p strong")
}
function highlight(){
    getBoldItems(); 

    allBoldItems.forEach(function(item) {
        item.style.color = "blue";
    });
    }
function returnItemsToDefault(){
      allBoldItems.forEach(function(item) {
    item.style.color = "black"; 
  });
}