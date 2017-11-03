(function(){
    
        //vertex shader calcular posiciones y vertices de los primitivos
        //y el frament shader calcula el color y la posicion de los primitivos
    
        let scene = new THREE.Scene();
        const aspectRatio = window.innerWidth / window.innerHeight;
        let camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 100);
        let renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);
    
        camera.position.z = 30;
        camera.position.y = 5;
        let mesh;
        let meshV;
        let meshH;
        let meshM;
        let meshJ;
        let meshS;
    
        let sun = new THREE.TextureLoader();
        let venus = new THREE.TextureLoader();
        let earth = new THREE.TextureLoader();
        let mars = new THREE.TextureLoader();
        let jupiter = new THREE.TextureLoader();
        let saturno = new THREE.TextureLoader();
        
    
        sun.load('public/sun.jpg', function(texture){
            let geometry = new THREE.SphereGeometry(5,100,100)
            let material = new THREE.MeshBasicMaterial({
                map: texture
            })
    
            mesh = new THREE.Mesh(geometry, material);
    
            mesh.position.y = 0;
            scene.add(mesh);
        })
        venus.load('public/venus.jpg', function(texture){
            let geometry = new THREE.SphereGeometry(2,100,100)
            let material = new THREE.MeshBasicMaterial({
                map: texture
            })
    
            meshV = new THREE.Mesh(geometry, material);
    
            meshV.position.x = 10;
            scene.add(meshV);
        })
        earth.load('public/earth.jpg', function(texture){
            let geometry = new THREE.SphereGeometry(3,100,100)
            let material = new THREE.MeshBasicMaterial({
                map: texture
            })
    
            meshH = new THREE.Mesh(geometry, material);
    
            meshH.position.x = 16;
            scene.add(meshH);
        })
        mars.load('public/mars.jpg', function(texture){
            let geometry = new THREE.SphereGeometry(3,100,100)
            let material = new THREE.MeshBasicMaterial({
                map: texture
            })
    
            meshM = new THREE.Mesh(geometry, material);
    
            meshM.position.x = 24;
            scene.add(meshM);
        })
        jupiter.load('public/jupiter.jpg', function(texture){
            let geometry = new THREE.SphereGeometry(3,100,100)
            let material = new THREE.MeshBasicMaterial({
                map: texture
            })
    
            meshJ = new THREE.Mesh(geometry, material);
    
            meshJ.position.x = 33;
            scene.add(meshJ);
        })
        saturno.load('public/saturno.jpg', function(texture){
            let geometry = new THREE.SphereGeometry(3,100,100)
            let material = new THREE.MeshBasicMaterial({
                map: texture
            })
    
            meshS = new THREE.Mesh(geometry, material);
    
            meshS.position.x = 45;
            scene.add(meshS);
        })
        //let geometry = new THREE.BoxGeometry(10,10,10,10);
    
        let groundMaterial = new THREE.MeshPhongMaterial({
            color: 0xffffff
        });
    
        //let mesh = new THREE.Mesh(geometry, groundMaterial);
    
        let pointLight = new THREE.PointLight(0x404040);
    
        pointLight.position.y = 80;
        pointLight.position.z = 20;
        
        scene.background = new THREE.Color('black');
        scene.add(new THREE.AmbientLight(0x404040));
        scene.add(pointLight);
    
    
        function loop(){
            requestAnimationFrame(loop);
            //mesh.rotation.y += 0.01;
            mesh.rotation.z += 0.01;
            mesh.rotation.x += 0.01;

            meshV.rotation.z += 0.01;
            meshV.rotation.x += 0.01;
            
            meshH.rotation.z += 0.01;
            meshH.rotation.x += 0.01;

            meshM.rotation.z += 0.01;
            meshM.rotation.x += 0.01;

            meshJ.rotation.z += 0.01;
            meshJ.rotation.x += 0.01;

            meshS.rotation.z += 0.01;
            meshS.rotation.x += 0.01;

            renderer.render(scene, camera);
        }
    
        loop();
    
    })();