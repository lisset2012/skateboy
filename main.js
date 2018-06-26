window.onscroll = function (e) {
  if (document.body.scrollTop < 50) {

    document.getElementById("crazy_boy").style.backgroundPosition = "0px 0px";
    document.getElementById("crazy_boy").style.top = '-80px';

  }


  if (document.body.scrollTop >= 50 && document.body.scrollTop < 1200) {//document.documentElement.scrollTop >50 => es lo mismo que document.body.scrollTop > 50 

    document.getElementById("crazy_boy").style.backgroundPosition = '-72px 0px';
    document.getElementById("crazy_boy").style.top = '50%'; //window.innerHeight / 2 + 'px';//document.getElementById("crazy_boy").offsetHeight / 2
    console.log(document.body.scrollTop);
  }


  // console.log('scroll is here ===>' + document.body.scrollTop);
  // add the rest of the conditions here
}