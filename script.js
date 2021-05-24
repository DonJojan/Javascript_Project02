document.getElementsByClassName("contact-list")[0].style.display='none'; // hiding all the body elements

  
  var len;



  
  
  document.onreadystatechange = function () {
    if (document.readyState === "interactive") {
     

     
     
  
      const ul = document.querySelectorAll('ul li');        // getting the array from the html
      len = ul.length;
     
      function fun3(p1){
        console.log(p1);
        let upper=p1*10;
        let lower = (p1*10)-10;
        document.getElementsByClassName("contact-list")[0].style.display='none';

        document.getElementsByClassName("contact-list")[0].style.display='block';
        for (let i = 0; i <= ul.length - 1; i++) {

          var second = document.createElement("div");
          second.appendChild(ul[i]);
         
            if(i>=lower && i < upper)                                                     // determing which elements to be appended based on user click
            {
              document.getElementsByClassName("contact-list")[0].appendChild(second);     // appending elements to the html
            
          }
          



        }
        
     
      }

      function fun4(p1){                                                          //appending elements to the last page
        console.log(p1);
        document.getElementsByClassName("contact-list")[0].style.display='none';

        document.getElementsByClassName("contact-list")[0].style.display='block';
        let upperlimit = len ;
        let lowerlimit = (p1*10)-10;                              // calculating the limit
                                                       
        
        for (let i = 0; i <= ul.length - 1; i++) {

          var second = document.createElement("div");
          second.appendChild(ul[i]);
        
          
     
      if(i>=lowerlimit && i < upperlimit)
      {
        document.getElementsByClassName("contact-list")[0].appendChild(second);
      }
    

        }
        
     
      }


      
     
      console.log(len);
      let no = (len/10)+1;
      void fun3(1);
console.log(Math.floor(no));
console.log(len);
var first = Array(Math.floor(no));                                    
for(let j=1;j<= Math.floor(no);j++)
{
    first[j] =document.createElement("button");                                 // creating button depending on number of elements
    var text = document.createTextNode(j);
    first[j].appendChild(text);
  
    document.getElementsByClassName("button1")[0].appendChild(first[j]);
    console.log(j);
first[j].addEventListener ("click", function() {                             // displaying elements after user clicks on button
  
  if( j<Math.floor(no))
  {
    
    void fun3(j);
  }
  if( j==Math.floor(no))
  {
    
    void fun4(j);
  }
  
});
}

  }
  }


