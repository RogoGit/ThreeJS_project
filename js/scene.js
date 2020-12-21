import * as THREE from 'three'

// getting window width and height for size and camera
export let HEIGHT = window.innerHeight;
export let WIDTH = window.innerWidth;

export let camera;
export let renderer;

export function createScene() {

    const scene = new THREE.Scene(); // create scene
    initCamera(WIDTH, HEIGHT);  // create camera
    initRenderer(WIDTH, HEIGHT )//create renderer
    window.addEventListener('resize', handleWindowResize, false); // check for window resize
    return scene;

}

function initCamera(WIDTH, HEIGHT) {

    // camera creation
    const aspectRatio = WIDTH / HEIGHT;
    const fieldOfView = 60;
    camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, 1, 1000);

    // setting cam position
    camera.position.x = 0;
    camera.position.z = 200;
    camera.position.y = 500;
}

function initRenderer(WIDTH, HEIGHT) {

    // renderer create
    renderer = new THREE.WebGLRenderer({
        alpha: true, // прозрачность
        antialias: true // сглаживание
    });

    // set size
    renderer.setSize(WIDTH, HEIGHT);
    renderer.shadowMap.enabled = true; // shadows

    // render scene to DOM element
    document.body.appendChild(renderer.domElement);
}

function handleWindowResize() {
    // update camera and renderer size
    HEIGHT = window.innerHeight;
    WIDTH = window.innerWidth;
    renderer.setSize(WIDTH, HEIGHT);
    camera.aspect = WIDTH / HEIGHT;
    camera.updateProjectionMatrix();
}
