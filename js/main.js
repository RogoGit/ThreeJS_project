import * as THREE from 'three'

import {camera, createScene, renderer} from "./scene";
import {addLights} from "./lights";
import {
    addBush1, addHive, addPlant2, addPlant5, addPlant6, addWindows,
    createChimney, createDoor,
    createField,
    createHouseBase,
    createHouseRoof,
    createSmoke,
    smokeCloud
} from "./drawer";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

window.addEventListener('load', main, false);
export let controls, scene;
let pos, radius, tube, scaleX, scaleY, scaleZ,  particleSystem, particleCount, particles, pMaterial, bee_cnt;

function main() {
    scene = createScene(); // configuring scene, camera, renderer
    addLights(scene); // adding lights
    // adding figures
    createField(scene);
    createHouseBase(scene);
    createHouseRoof(scene);
    createChimney(scene);
    createSmoke(scene);
    addBush1(scene);
    addPlant2(scene);
    createDoor(scene);
    addWindows(scene);
    addPlant5(scene);
    addPlant6(scene);
    addHive(scene);

    //const axesHelper = new THREE.AxesHelper(40);
    //scene.add(axesHelper);

    //renderer.render(scene, camera); // render all

    scene.add( new THREE.AmbientLight( 0x666666));

    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = true;
    //controls.autoRotate = true;

    //controls.addEventListener( 'change', render.render(scene, camera));

    pos = 1;
    radius = 2;
    tube = 1.5;
    bee_cnt = 0;

    //controls.update() must be called after any manual changes to the camera's transform
    camera.position.set(0, 100, 100);
   // controls.update();

    let beeTexture = THREE.ImageUtils.loadTexture("textures/bee.png")

    particleCount = 35;
    particles = new THREE.Geometry();
    pMaterial = new THREE.PointsMaterial({
            size: 4,
            map: beeTexture,
            blending: THREE.NormalBlending,
            transparent: true
    });

// now create the individual particles
    for (let p = 0; p < particleCount; p++) {
        // create a particle with random pos // -330
        let pX = Math.random() * 50,
            pY = Math.random() * 50,
            pZ = Math.random() * 50 - 60,
            particle = new THREE.Vector3(pX, pY, pZ);

        particle.velocity = new THREE.Vector3(Math.random()*20-10,Math.random()*20-10,Math.random()*20-10);

        // add it to the geometry
        particles.vertices.push(particle);
    }

// create the particle system
    particleSystem = new THREE.Points(particles, pMaterial);
    particleSystem.sortParticles = true;
   // particleSystem.rotateOnAxis(new THREE.Vector3(25,0,-25), 0);

// add it to the scene
    scene.add(particleSystem);

    renderer.render( scene, camera );
    animate();
}

function animate() {
    requestAnimationFrame( animate );
    animateSmoke();
    animateBees();
    // required if controls.enableDamping or controls.autoRotate are set to true
    controls.update();
    renderer.render( scene, camera );
}

function animateSmoke() {
    radius += 1;
    tube -= 0.1;
    scaleX = 0.01 * radius;
    scaleY = 0.01 * radius;
    scaleZ = 0.01 * radius;
    smokeCloud.mesh.position.y += 0.05;
    smokeCloud.mesh.scale.set(scaleX, scaleY, scaleZ);
    if (radius >= 200) {
        smokeCloud.mesh.scale.set(1,1,1);
        radius = 1;
        smokeCloud.mesh.position.y = 51;
    }
}

function animateBees() {

    particleSystem.rotation.y += 0.01;
    bee_cnt++;
    if (bee_cnt >= 20) {
        bee_cnt = 0;
    }
    /*let pCount = particleCount;
    while (pCount--) {
        // get the particle
        let particle = particles.vertices[pCount];
        particle.velocity.y +=0.1;

        // check if we need to reset
        if (particle.y < -200) {
            particle.y = 200;
        }

        particle.set(particle.velocity);
    }*/

    // flag to the particle system that we've changed its vertices.
    particleSystem.needsUpdate = true;
}
