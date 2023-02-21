let prev_scroll_pos = window.pageYOffset;

window.onscroll = function() {
    
  let current_scroll_pos = window.pageYOffset;

  if (prev_scroll_pos > current_scroll_pos) {
    document.querySelector('.navbar').classList.remove('hidden');
  } 
  
  else {
    document.querySelector('.navbar').classList.add('hidden');
  }
  
  prev_scroll_pos = current_scroll_pos;

}