
var material = new THREE.LineBasicMaterial( {color:0xffffff, overdraw: true} );
 var i; geometry_points = new Array();
		line 	 = new Array();
	 for (i=0;i<5;i++)
	 { 
		geometry_points[i]= new THREE.Geometry();
		geometry_points[i].dynamic = true;
	 
		
		line[i]=new THREE.Line(geometry_points[i],material);

	 }


function update_lines(geometry,m)
		{ 
		m= Math.abs(m);
		m= m%20;  // after every 20 steps new month is introduced .
		 
		
		for (i=0;i<5;i++)
			{
				
				if(geometry_points[i].vertices.length > 0)
					{ 
					geometry_points[i].vertices.pop();
					geometry_points[i].vertices.pop();
					}
				geometry_points[i].vertices.push(new THREE.Vector3(geometry.vertices[20*(i)+m].x ,geometry.vertices[20*(i)+m].y +1,-51.0 ));
				geometry_points[i].vertices.push(new THREE.Vector3(geometry.vertices[20*(i)+m].x,geometry.vertices[20*(i)+m].y+1, 57));
				scene.add(line[i]);
			}
			
		
		}

	 
	 

 