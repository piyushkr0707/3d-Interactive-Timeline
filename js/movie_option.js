function movie_option()
{   /*var arr_op = new Array();
	var top= 395;
	  var TopString  = top.toString() + "px";
	var left =205;
	  var LeftString = left.toString()+ "px";
	  var i;*/
	  
	  var arr_op = new Array();
	 Top  =	50; 	// window.innerWitdh/2;
	  TopString  = Top.toString()+ "%";
	 Left =	26; // window.innerWitdh/2  //21
	   LeftString = Left.toString()+ "%";
	   
	 for (i=0;i<6;i++)
	 { 
	  arr_op[i] = document.createElement( 'div' );
				arr_op[i].style.position = 'absolute';
				arr_op[i].style.top  	 = TopString;
				arr_op[i].style.left 	 = LeftString;  
				arr_op[i].style.width 	 = '100px';
				arr_op[i].style.height 	 = '164px';
				switch(i)
				{
				case 0 : arr_op[i].style.backgroundImage ="url('images/movie_images/elysium.png')";
						break;
				case 1 : arr_op[i].style.backgroundImage ="url('images/movie_images/after earth.png')";
						break;
				case 2 : arr_op[i].style.backgroundImage ="url('images/movie_images/white house down.png')";
						break;
				case 3 : arr_op[i].style.backgroundImage ="url('images/movie_images/grown ups 2.png')";
						break;
				case 4 : arr_op[i].style.backgroundImage ="url('images/movie_images/spiderman.png')";
						break;
				case 5 : arr_op[i].style.backgroundImage ="url('images/movie_images/cloudy with a chance of meatball 2.png')";
						break;
				} //switch ends
				
				container.appendChild( arr_op[i] ); 
				
	
	
		
	
		Left +=8.1; //8
	    LeftString = Left.toString()+"%";
	  
	 }
	
	 

}