import * as THREE from 'three'
import {SCENE_COLORS} from "./helpers";
import {FBXLoader} from "three/examples/jsm/loaders/FBXLoader";
import {renderer} from "./scene";

// figures
export const Field = function () {
   const geometry = new THREE.PlaneGeometry(150, 150,10,10); // figure
   const texture = THREE.ImageUtils.loadTexture('textures/grass2.jpg');
   const material = new THREE.MeshLambertMaterial({map: texture});
   material.side = THREE.DoubleSide;
   this.mesh = new THREE.Mesh(geometry, material); // mesh = geometry + material
   this.mesh.receiveShadow = true; // enable shadows
   this.mesh.castShadow = true;
}

export const HouseBase = function() {
   const geometry = new THREE.BoxGeometry(50,30,50);
   const texture = THREE.ImageUtils.loadTexture('textures/wall.jpg');
   const material = new THREE.MeshLambertMaterial({map: texture});
   //const material = new THREE.MeshLambertMaterial( {color: SCENE_COLORS.cream} );
   this.mesh = new THREE.Mesh( geometry, material);
   this.mesh.receiveShadow = true;
   this.mesh.castShadow = true;
}

export const Roof = function() {
   const geometry = new THREE.CylinderGeometry( 0.5 / Math.sqrt( 2 ), 1 / Math.sqrt( 2 ), 1, 4, 1 );
   geometry.rotateY( Math.PI / 4 );
   geometry.computeFlatVertexNormals();
   //const material = new THREE.MeshLambertMaterial( {color: SCENE_COLORS.brown} );
   const texture = THREE.ImageUtils.loadTexture('textures/straw.jpg');
   texture.anisotropy = renderer.getMaxAnisotropy();
   const material = new THREE.MeshLambertMaterial({map: texture});
   this.mesh = new THREE.Mesh( geometry, material );
   this.mesh.scale.set( 65, 18, 65);
   this.mesh.receiveShadow = true;
   this.mesh.castShadow = true;
}

export const Chimney = function() {
   const geometry = new THREE.CylinderGeometry(3,3,10);
   const material = new THREE.MeshLambertMaterial( {color: SCENE_COLORS.grey} );
   this.mesh = new THREE.Mesh( geometry, material);
   this.mesh.receiveShadow = true;
   this.mesh.castShadow = true;
}

export const SmokeCloud = function() {
   const geometry = new THREE.TorusGeometry(2, 1.5, 16, 100);
   const material = new THREE.MeshLambertMaterial({color: SCENE_COLORS.smoke});
   this.mesh = new THREE.Mesh(geometry, material);
   //this.mesh.castShadow = true;
}

export const Door = function () {
   const geometry = new THREE.PlaneGeometry(15, 20); // figure
   const texture = THREE.ImageUtils.loadTexture('textures/door_2.png');
   const material = new THREE.MeshLambertMaterial({map: texture});
   material.side = THREE.DoubleSide;
   this.mesh = new THREE.Mesh(geometry, material); // mesh = geometry + material
   this.mesh.receiveShadow = true; // enable shadows
   this.mesh.castShadow = true;
}

export const Window = function() {
   const geometry = new THREE.PlaneGeometry(13, 13); // figure
   const texture = THREE.ImageUtils.loadTexture('textures/window.png');
   const material = new THREE.MeshLambertMaterial({map: texture});
   material.side = THREE.DoubleSide;
   this.mesh = new THREE.Mesh(geometry, material); // mesh = geometry + material
   this.mesh.receiveShadow = true; // enable shadows
   this.mesh.castShadow = true;
}

export const Hive = function() {
   const geometry = new THREE.SphereGeometry(5, 21, 7);
   const material = new THREE.MeshLambertMaterial({color: SCENE_COLORS.hive});
   this.mesh = new THREE.Mesh(geometry, material);
   this.mesh.receiveShadow = true;
   this.mesh.castShadow = true;
}

export const HiveHole = function() {
   const geometry = new THREE.SphereGeometry(1, 21, 7);
   const material = new THREE.MeshLambertMaterial({color: 'black'});
   this.mesh = new THREE.Mesh(geometry, material);
}
