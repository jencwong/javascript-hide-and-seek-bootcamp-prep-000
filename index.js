function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(target){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  const rankedLists  = document.querySelectorAll('.ranked-list');
  
  document.getElementById('app').querySelectorAll('ul.ranked-list');

   for (let i = 0; i < upRank.length; i++){
    upRank[i].innerHTML = ((parseInt(upRank[i].innerHTML)) + n)
    }