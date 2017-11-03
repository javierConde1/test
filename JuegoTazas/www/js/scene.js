(function(){

    //vertex shader calcular posiciones y vertices de los primitivos
    //y el frament shader calcula el color y la posicion de los primitivos

    let scene = new THREE.Scene();
    const aspectRatio = window.innerWidth / window.innerHeight;
    let camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 100);
    let renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.soft = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;


    camera.position.z = 60;
    camera.position.y = 10;

    let planeGeometry = new THREE.PlaneGeometry(200,900);
    planeGeometry.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI/2));
    let groundMaterial = new THREE.MeshPhongMaterial({
        color: '#309DB2'
    });
    let plane = new THREE.Mesh(planeGeometry, groundMaterial);
    plane.receiveShadow  = true;
    let mesh;
    let mesh2;

    let taza = new THREE.TextureLoader();
    let plato = new THREE.TextureLoader();
    let haza = new THREE.TextureLoader();
    
    taza.load('public/taza.jpg', function(texture){
        var points = [];
        for ( var i = 0; i < 10; i ++ ) {
            points.push( new THREE.Vector2( Math.sin( i * 0.2 ) * 10 + 5, ( i - 5 ) * 2 ) );
        }
        let geometry = new THREE.LatheGeometry( points );
        let material = new THREE.MeshBasicMaterial({
            map: texture
        })

        mesh = new THREE.Mesh(geometry, material);

        mesh.position.y = 10;
        mesh.position.z = -25;

        mesh.castShadow = true;
        scene.add(mesh);
    })
    taza.load('public/taza.jpg', function(texture){
        var points = [];
        for ( var i = 0; i < 10; i ++ ) {
            points.push( new THREE.Vector2( Math.sin( i * 0.2 ) * 10 + 5, ( i - 5 ) * 2 ) );
        }
        let geometry = new THREE.LatheGeometry( points );
        let material = new THREE.MeshBasicMaterial({
            map: texture
        })

        mesh = new THREE.Mesh(geometry, material);

        mesh.position.y = 10;
        mesh.position.x = -38;
        mesh.position.z = 20;

        mesh.castShadow = true;
        scene.add(mesh);
    })
    taza.load('public/taza.jpg', function(texture){
        var points = [];
        for ( var i = 0; i < 10; i ++ ) {
            points.push( new THREE.Vector2( Math.sin( i * 0.2 ) * 10 + 5, ( i - 5 ) * 2 ) );
        }
        let geometry = new THREE.LatheGeometry( points );
        let material = new THREE.MeshBasicMaterial({
            map: texture
        })

        mesh = new THREE.Mesh(geometry, material);

        mesh.position.y = 10;
        mesh.position.x = 38;
        mesh.position.z = 20;

        mesh.castShadow = true;
        scene.add(mesh);
    })
    plato.load('public/taza.jpg', function (texture) {
        let geometry = new THREE.CylinderGeometry ( 25 , 10 , 3 , 10 , 10   )
        let material = new THREE.MeshBasicMaterial({
            map: texture
        })

        mesh2 = new THREE.Mesh(geometry, material);

        mesh2.position.y = 0;
        mesh2.position.z = -25;

        mesh2.castShadow = true;
        scene.add(mesh2);
    })
    plato.load('public/taza.jpg', function (texture) {
        let geometry = new THREE.CylinderGeometry ( 25 , 10 , 3 , 10 , 10   )
        let material = new THREE.MeshBasicMaterial({
            map: texture
        })

        mesh2 = new THREE.Mesh(geometry, material);

        mesh2.position.y = 0;
        mesh2.position.x = -35;
        mesh2.position.z = 20;

        mesh2.castShadow = true;
        scene.add(mesh2);
    })
    plato.load('public/taza.jpg', function (texture) {
        let geometry = new THREE.CylinderGeometry ( 25 , 10 , 3 , 10 , 10   )
        let material = new THREE.MeshBasicMaterial({
            map: texture
        })

        mesh2 = new THREE.Mesh(geometry, material);

        mesh2.position.y = 0;
        mesh2.position.x = 35;
        mesh2.position.z = 20;

        mesh2.castShadow = true;
        scene.add(mesh2);
    })
    haza.load('public/taza.jpg', function (texture) {
        let geometry = new THREE.RingGeometry ( 3, 5, 32,1)
        let material = new THREE.MeshBasicMaterial({
            map: texture
        })

        mesh2 = new THREE.Mesh(geometry, material);

        mesh2.position.y = 13;
        mesh2.position.x = 15;
        mesh2.position.z = -18;

        mesh2.castShadow = true;
        scene.add(mesh2);
    })
    haza.load('public/taza.jpg', function (texture) {
        let geometry = new THREE.RingGeometry ( 3, 5, 32,1)
        let material = new THREE.MeshBasicMaterial({
            map: texture
        })

        mesh2 = new THREE.Mesh(geometry, material);

        mesh2.position.y = 13;
        mesh2.position.x = -20;
        mesh2.position.z = 20;

        mesh2.castShadow = true;
        scene.add(mesh2);
    })
    haza.load('public/taza.jpg', function (texture) {
        let geometry = new THREE.RingGeometry ( 3, 5, 32,1)
        let material = new THREE.MeshBasicMaterial({
            map: texture
        })

        mesh2 = new THREE.Mesh(geometry, material);

        mesh2.position.y = 13;
        mesh2.position.x = 20;
        mesh2.position.z = 20;

        mesh2.castShadow = true;
        scene.add(mesh2);
    })

    //let geometry = new THREE.BoxGeometry(10,10,10,10);

   // let groundMaterial = new THREE.MeshPhongMaterial({
       // color: 0xffffff
    //});

    //let mesh = new THREE.Mesh(geometry, groundMaterial);

    let pointLight = new THREE.PointLight(0x606060);

    pointLight.position.y = 60;
    pointLight.position.z = 20;

    pointLight.castShadow = true;

    scene.background = new THREE.Color(0xeeeeee);
    scene.add(new THREE.AmbientLight(0x404040));
    scene.add(plane);
    scene.add(pointLight);

    let controls = new THREE.OrbitControls(camera, renderer.domElement);


    function loop(){
        requestAnimationFrame(loop);
        renderer.render(scene, camera);
    }

    loop();

})();