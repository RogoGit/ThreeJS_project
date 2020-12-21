import * as THREE from 'three'

export function addLights(scene) {
    // gradient light
    const hemisphereLight = new THREE.HemisphereLight(0xbae4e3,0x97c5e5, .5)
    hemisphereLight.position.set(0,100,0);
    // from one point to certain direction (like sun)
    const shadowLight = new THREE.DirectionalLight(0xffffff, 0.7);
    shadowLight.position.set(-250, 100, -250);
    shadowLight.castShadow = true; // enable shadows

    // setting shadows area
    shadowLight.shadow.camera.left = -200;
    shadowLight.shadow.camera.right = 200;
    shadowLight.shadow.camera.top = 200;
    shadowLight.shadow.camera.bottom = -200;
    shadowLight.shadow.camera.near = 1;
    shadowLight.shadow.camera.far = 1000;

    shadowLight.shadow.mapSize.width = 1024;
    shadowLight.shadow.mapSize.height = 1024;

    // adding light to scene
    scene.add(hemisphereLight);
    scene.add(shadowLight);

    const lightHelper = new THREE.HemisphereLightHelper(hemisphereLight, 10);
    scene.add(lightHelper);
}