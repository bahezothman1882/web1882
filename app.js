function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }

  function myColor() {

    document.body.style.backgroundColor ="black";
    document.body.style.color ="white";



  }

  function myreset() {

    document.body.style.backgroundColor ="white";
    document.body.style.color ="Black";
    
    
    
      }

      function myadd() {
        

        

        var x = document.getElementById("id1").value;
        var y = document.getElementById("id2").value;
        var z = parseInt(x) + parseInt(y);
        document.getElementById("result").innerHTML = x+' + '+y+ ' = '+z;

        
        
          }

     


          