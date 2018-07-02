window.onscroll = function (e) {
  // console.log(e)
  if (document.body.scrollTop < 50 || document.documentElement.scrollTop < 50) {

    document.getElementById("crazy_boy").style.backgroundPosition = '0px 0px';
    document.getElementById("crazy_boy").style.top = '-80px';
    console.log(document.documentElement.scrollTop);
  }


  if (document.body.scrollTop > 50 &&  document.body.scrollTop < 668 || document.documentElement.scrollTop> 50 &&  document.documentElement.scrollTop < 668) {

    document.getElementById("crazy_boy").style.backgroundPosition = '-72px 0px';
    document.getElementById("crazy_boy").style.top ='50%'; 
  }

  if (document.body.scrollTop > 668 && document.body.scrollTop < 1336 || document.documentElement.scrollTop> 668 &&  document.documentElement.scrollTop < 1336) {

    document.getElementById("crazy_boy").style.backgroundPosition = '-144px 0px';
    document.getElementById("crazy_boy").style.top = '50%'; 
  }

  if (document.body.scrollTop > 1336 && document.body.scrollTop < 2003 ||document.documentElement.scrollTop> 1336 &&  document.documentElement.scrollTop < 2003) {

    document.getElementById("crazy_boy").style.backgroundPosition = '0px -80px';
    document.getElementById("crazy_boy").style.top = '50%'; 
    console.log(document.body.scrollTop);
  }

  if (document.body.scrollTop > 2003 && document.body.scrollTop < 2671 || document.documentElement.scrollTop> 2003 &&  document.documentElement.scrollTop < 2671) {

    document.getElementById("crazy_boy").style.backgroundPosition = '-72px -80px';
    document.getElementById("crazy_boy").style.top = '50%'; 
    
  }

  if (document.body.scrollTop > 2671 && document.body.scrollTop < 3339 || document.documentElement.scrollTop> 2671 &&  document.documentElement.scrollTop < 3339) {

    document.getElementById("crazy_boy").style.backgroundPosition = '-144px -80px';
    document.getElementById("crazy_boy").style.top = '50%'; 
    
  }

  if (document.body.scrollTop > 3339 && document.body.scrollTop < 4007 || document.documentElement.scrollTop> 3339 &&  document.documentElement.scrollTop < 4007) {

    document.getElementById("crazy_boy").style.backgroundPosition = '0px -160px';
    document.getElementById("crazy_boy").style.top = '50%'; 
    
  }

  if (document.body.scrollTop > 4007 && document.body.scrollTop < 4675 || document.documentElement.scrollTop> 4007 &&  document.documentElement.scrollTop < 4675) {

    document.getElementById("crazy_boy").style.backgroundPosition = '0px 0px';
    document.getElementById("crazy_boy").style.top = '10%'; 
   
  }
  
}