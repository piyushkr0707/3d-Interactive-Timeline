function icon_creation()
		{

		var loader = new THREE.TextureLoader();
		
		
			loader.load( 'images/icon1.png', function ( texture ) {

			var geometry = new THREE.PlaneGeometry( 10,10 );
			var material = new THREE.MeshBasicMaterial( { map: texture, overdraw: 0.5 } );
			var mesh_icon = new THREE.Mesh( geometry, material );
			mesh_icon.rotation.y=-Math.PI/2;
			group1.add( mesh_icon );

		} );

		
		loader.load( 'images/icon2.png', function ( texture ) {

			var geometry = new THREE.PlaneGeometry( 10,10 );

			var material = new THREE.MeshBasicMaterial( { map: texture, overdraw: 0.5 } );
			var mesh_icon = new THREE.Mesh( geometry, material );
			mesh_icon.rotation.y=-Math.PI/2;
			group2.add( mesh_icon );

		} );
			loader.load( 'images/icon3.png', function ( texture ) {

			var geometry = new THREE.PlaneGeometry( 10,10 );

			var material = new THREE.MeshBasicMaterial( { map: texture, overdraw: 0.5 } );
			var mesh_icon = new THREE.Mesh( geometry, material );
			mesh_icon.rotation.y=-Math.PI/2;
			group3.add( mesh_icon );

		} );	loader.load( 'images/icon4.png', function ( texture ) {

			var geometry = new THREE.PlaneGeometry( 10,10 );

			var material = new THREE.MeshBasicMaterial( { map: texture, overdraw: 0.5 } );
			var mesh_icon = new THREE.Mesh( geometry, material );
			mesh_icon.rotation.y=-Math.PI/2;
			group4.add( mesh_icon );

		} );	loader.load( 'images/icon5.png', function ( texture ) {

			var geometry = new THREE.PlaneGeometry( 10,10 );

			var material = new THREE.MeshBasicMaterial( { map: texture, overdraw: 0.5 } );
			var mesh_icon = new THREE.Mesh( geometry, material );
			mesh_icon.rotation.y=-Math.PI/2;
			group5.add( mesh_icon );

		} );	loader.load( 'images/icon6.png', function ( texture ) {

			var geometry = new THREE.PlaneGeometry( 10,10 );

			var material = new THREE.MeshBasicMaterial( { map: texture, overdraw: 0.5 } );
			var mesh_icon = new THREE.Mesh( geometry, material );
			mesh_icon.rotation.y=-Math.PI/2;
			group6.add( mesh_icon );

		} );

		
						
		}