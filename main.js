window.onscroll = function (e) {
  if (document.body.scrollTop < 50) {

    document.getElementById("crazy_boy").style.backgroundPosition = '0px 0px';
    document.getElementById("crazy_boy").style.top = '50%';
    console.log(document.body.scrollTop);
  }


  if (document.body.scrollTop > 50 && document.body.scrollTop < 100) {

    document.getElementById("crazy_boy").style.backgroundPosition = '-72px 0px';
    document.getElementById("crazy_boy").style.top ='50%'; //window.innerHeight / 2 + 'px';//document.getElementById("crazy_boy").offsetHeight / 2
    console.log(document.body.scrollTop);
  }

  if (document.body.scrollTop > 100 && document.body.scrollTop < 200) {

    document.getElementById("crazy_boy").style.backgroundPosition = '-144px 0px';
    document.getElementById("crazy_boy").style.top = '50%'; //window.innerHeight / 2 + 'px';//document.getElementById("crazy_boy").offsetHeight / 2
    console.log(document.body.scrollTop);
  }

  if (document.body.scrollTop > 200 && document.body.scrollTop < 1983) {

    document.getElementById("crazy_boy").style.backgroundPosition = '0px -80px';
    document.getElementById("crazy_boy").style.top = '50%'; //window.innerHeight / 2 + 'px';//document.getElementById("crazy_boy").offsetHeight / 2
    console.log(document.body.scrollTop);
  }

  if (document.body.scrollTop > 1983 && document.body.scrollTop < 2644) {

    document.getElementById("crazy_boy").style.backgroundPosition = '-72px -80px';
    document.getElementById("crazy_boy").style.top = '50%'; //window.innerHeight / 2 + 'px';//document.getElementById("crazy_boy").offsetHeight / 2
    console.log(document.body.scrollTop);
  }

  if (document.body.scrollTop > 2644 && document.body.scrollTop < 3304) {

    document.getElementById("crazy_boy").style.backgroundPosition = '-144px -80px';
    document.getElementById("crazy_boy").style.top = '50%'; //window.innerHeight / 2 + 'px';//document.getElementById("crazy_boy").offsetHeight / 2
    console.log(document.body.scrollTop);
  }

  if (document.body.scrollTop > 3304 && document.body.scrollTop < 3966) {

    document.getElementById("crazy_boy").style.backgroundPosition = '-0px -160px';
    document.getElementById("crazy_boy").style.top = '50%'; //window.innerHeight / 2 + 'px';//document.getElementById("crazy_boy").offsetHeight / 2
    console.log(document.body.scrollTop);
  }

  if (document.body.scrollTop > 3966 && document.body.scrollTop < 4675) {

    document.getElementById("crazy_boy").style.backgroundPosition = '-72px -160px';
    document.getElementById("crazy_boy").style.top = '50%'; //window.innerHeight / 2 + 'px';//document.getElementById("crazy_boy").offsetHeight / 2
    console.log(document.body.scrollTop);
  }
  // console.log('scroll is here ===>' + document.body.scrollTop);
  // add the rest of the conditions here
}