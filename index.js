function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(target){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  const rankedLists  = document.querySelectorAll('.ranked-list');
  
  document.getElementById('app').querySelectorAll('ul.ranked-list');
  
  for (let i = 0; i < rankedLists.length; i++){
    rankedLists[i].innerHTML = ((parseInt(rankedLists[i].innerHTML)) + n);
  }
}

function deepestChild(){
  document.getElementsById()
  
}