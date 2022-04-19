function myFunction(){
     //Odin  Li Shifan//
     //1. Is an interpretive scripting language, code is not preprogrammed. 
     //2. Mainly used to add interactive behavior to HTML pages. 
     //3. It can be directly embedded in HTML pages, but written as a separate JS file facilitates the separation of structure and behavior.
     var x = document.getElementById("userInput1").value;
     var y = document.getElementById("userInput2").value;
     var z =parseInt(x)+parseInt(y);
     document.getElementById("demo").innerHTML = z;
    }