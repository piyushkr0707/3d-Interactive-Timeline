
function movie_option_planes()
{   
	
	var loader = new THREE.TextureLoader();
		var z_value=-42;
	
	loader.load( 'images/movie_images/after earth.png', function ( texture ) {

			 var geometry = new THREE.PlaneGeometry( 16,28 );
			 var material = new THREE.MeshBasicMaterial( { map: texture, overdraw : true} );
			var mesh_icon1 = new THREE.Mesh( geometry, material );
			//mesh_icon1.rotation.x=(Math.PI/180)*7;
			//mesh_icon1.rotation.z=-(Math.PI/180)*7;
			mesh_icon1.rotation.y=-(Math.PI/180)*90;
				mesh_icon1.position.x= 0;
				mesh_icon1.position.y=-14;
				mesh_icon1.position.z= -42;//-61;
			scene.add(mesh_icon1);
			} );
			
			
			loader.load( 'images/movie_images/elysium.png', function ( texture ) {

			 var geometry = new THREE.PlaneGeometry( 16,28 );
			 var material = new THREE.MeshBasicMaterial( { map: texture, overdraw : true} );
			var  mesh_icon2 = new THREE.Mesh( geometry, material );
			//mesh_icon1.rotation.x=(Math.PI/180)*7;
			//mesh_icon1.rotation.z=-(Math.PI/180)*7;
			mesh_icon2.rotation.y=-(Math.PI/180)*90;
				mesh_icon2.position.x= 0;
				mesh_icon2.position.y=-14;
				mesh_icon2.position.z= -25;//-61;
			scene.add(mesh_icon2);
			} );
			
			
			
			loader.load( 'images/movie_images/white house down.png', function ( texture ) {

			 var geometry = new THREE.PlaneGeometry( 16,28 );
			 var material = new THREE.MeshBasicMaterial( { map: texture, overdraw : true} );
			var mesh_icon1 = new THREE.Mesh( geometry, material );
			//mesh_icon1.rotation.x=(Math.PI/180)*7;
			//mesh_icon1.rotation.z=-(Math.PI/180)*7;
			mesh_icon1.rotation.y=-(Math.PI/180)*90;
				mesh_icon1.position.x= 0;
				mesh_icon1.position.y=-14;
				mesh_icon1.position.z= -8 ;//-25;//-61;
			scene.add(mesh_icon1);
			} );
			
			
			
			loader.load( 'images/movie_images/grown ups 2.png', function ( texture ) {

			 var geometry = new THREE.PlaneGeometry( 16,28 );
			 var material = new THREE.MeshBasicMaterial( { map: texture, overdraw : true} );
			 var mesh_icon1 = new THREE.Mesh( geometry, material );
			//mesh_icon1.rotation.x=(Math.PI/180)*7;
			//mesh_icon1.rotation.z=-(Math.PI/180)*7;
			 mesh_icon1.rotation.y=-(Math.PI/180)*90;
				mesh_icon1.position.x= 0;
				mesh_icon1.position.y=-14;
				mesh_icon1.position.z= 9 ;//-25;//-61;
			scene.add(mesh_icon1);
			} );
			

			
			loader.load( 'images/movie_images/spiderman.png', function ( texture ) {

			 var geometry = new THREE.PlaneGeometry( 16,28 );
			var material = new THREE.MeshBasicMaterial( { map: texture, overdraw : true} );
			var mesh_icon1 = new THREE.Mesh( geometry, material );
			//mesh_icon1.rotation.x=(Math.PI/180)*7;
			//mesh_icon1.rotation.z=-(Math.PI/180)*7;
			 mesh_icon1.rotation.y=-(Math.PI/180)*90;
				mesh_icon1.position.x= 0;
				mesh_icon1.position.y=-14;
				mesh_icon1.position.z= 26;// -25;//-61;
			scene.add(mesh_icon1);
			} );
			
			
	
			loader.load( 'images/movie_images/cloudy with a chance of meatball 2.png', function ( texture ) {

			 var geometry = new THREE.PlaneGeometry( 16,28 );
			var material = new THREE.MeshBasicMaterial( { map: texture, overdraw : true} );
			var  mesh_icon1 = new THREE.Mesh( geometry, material );
			//mesh_icon1.rotation.x=(Math.PI/180)*7;
			//mesh_icon1.rotation.z=-(Math.PI/180)*7;
			 mesh_icon1.rotation.y=-(Math.PI/180)*90;
				mesh_icon1.position.x= 0;
				mesh_icon1.position.y=-14;
				mesh_icon1.position.z= 43 ;//-25;//-61;
			scene.add(mesh_icon1);
			} );
			
		
			
			
				
			
}