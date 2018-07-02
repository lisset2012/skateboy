window.onscroll = function (e) {
  // console.log(e)
  if (document.body.scrollTop < 50 || document.documentElement.scrollTop < 50) {

    document.getElementById("crazy_boy").style.backgroundPosition = '0px 0px';
    document.getElementById("crazy_boy").style.top = '-80px';
    console.log(document.documentElement.scrollTop);
  }


  if (document.body.scrollTop > 50 &&  document.body.scrollTop < 400 || document.documentElement.scrollTop> 50 &&  document.documentElement.scrollTop < 400) {

    document.getElementById("crazy_boy").style.backgroundPosition = '-72px 0px';
    document.getElementById("crazy_boy").style.top ='50%'; 
  }

  if (document.body.scrollTop > 400 && document.body.scrollTop < 800 || document.documentElement.scrollTop> 400 &&  document.documentElement.scrollTop < 800) {

    document.getElementById("crazy_boy").style.backgroundPosition = '-144px 0px';
    document.getElementById("crazy_boy").style.top = '50%'; 
  }

  if (document.body.scrollTop > 800 && document.body.scrollTop < 1200 ||document.documentElement.scrollTop> 800 &&  document.documentElement.scrollTop < 1200) {

    document.getElementById("crazy_boy").style.backgroundPosition = '0px -80px';
    document.getElementById("crazy_boy").style.top = '50%'; 
    console.log(document.body.scrollTop);
  }

  if (document.body.scrollTop > 1200 && document.body.scrollTop < 1800 || document.documentElement.scrollTop> 1200 &&  document.documentElement.scrollTop < 1800) {

    document.getElementById("crazy_boy").style.backgroundPosition = '-72px -80px';
    document.getElementById("crazy_boy").style.top = '50%'; 
    
  }

  if (document.body.scrollTop > 1800 && document.body.scrollTop < 2200 || document.documentElement.scrollTop> 1800 &&  document.documentElement.scrollTop < 2200) {

    document.getElementById("crazy_boy").style.backgroundPosition = '-144px -80px';
    document.getElementById("crazy_boy").style.top = '50%'; 
    
  }

  if (document.body.scrollTop > 2200 && document.body.scrollTop < 3000 || document.documentElement.scrollTop> 2200 &&  document.documentElement.scrollTop < 3000) {

    document.getElementById("crazy_boy").style.backgroundPosition = '0px -160px';
    document.getElementById("crazy_boy").style.top = '50%'; 
    
  }

  if (document.body.scrollTop > 3000 && document.body.scrollTop < 3500 || document.documentElement.scrollTop> 3000 &&  document.documentElement.scrollTop < 3500) {

    document.getElementById("crazy_boy").style.backgroundPosition = '-72px -160px';
    document.getElementById("crazy_boy").style.top = '50%'; 
   
  }
  
}