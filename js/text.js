	start_month=4;
	arr_month_name= new Array("Jan '14","Feb '14","Mar '14","Apr '14","May '14","June '14","july '14","Aug '14", "Sep '14","Oct '14","Nov '14","Dec '14")
	var textMaterial = new THREE.MeshBasicMaterial( { color:  0xffffff, overdraw: 0.5 } );
function createLabel(geometry) 
{	
	text =new Array();
				
				for (i=0;i<12;i++)
				{
				
					var text3d = new THREE.TextGeometry(arr_month_name[i] , {
						size:8,
						height:1.2,
						curveSegments:4,
						font: "helvetiker"

					});
					text[i] = new THREE.Mesh( text3d, textMaterial );
				}
				
				for (i=start_month;i<5+start_month;i++)
				{
					text[i].position.x = geometry.vertices[20*(i-start_month)].x ;
					text[i].position.y = geometry.vertices[20*(i-start_month)].y ;
					text[i].position.z = 60;
					text[i].rotation.y = -Math.PI/2;
					scene.add( text[i] );
				
				}

	}			
	start_month=4;			
function move_lable(geometry,m)
{	
m=m%20;

  
for (i=start_month;i<5+start_month;i++)
			{ i= i%12 ;
			 text[i].position.x = geometry.vertices[m+20*(i-start_month)].x ;
			 text[i].position.y = geometry.vertices[m+20*(i-start_month)].y ;
			 text[i].position.z = 60;
			 text[i].rotation.y = -Math.PI/2;
			 scene.add( text[i] );
			}
			if(text[start_month].position.x== geometry.vertices[19].x)
			
				{
				  if(start_month==0)
				  {
				  start_month=11;
				  }
				  else
				  { 
					start_month--;		//alert(start_month);		  
				  }
				obj = text[ i-1 ];
				scene.remove(obj);
				obj = text[ i-2 ];
				scene.remove(obj);
				obj = text[ i-3 ];
				scene.remove(obj);
				obj = text[ i-4 ];
				scene.remove(obj);
				//create_newLabel(geometry)
				}
			
			 
}



function remove_lines()
{  
 	 var obj, j;
		for ( j = text.length - 1; j >= 0 ; j -- ) 
		{
			
			
		}
}
