import {Chimney, Door, Field, Hive, HiveHole, HouseBase, Roof, SmokeCloud, Window} from "./figures";
import {FBXLoader} from "three/examples/jsm/loaders/FBXLoader";

export let smokeCloud;

export function createField(scene) {
    const plane = new Field();
    plane.mesh.rotation.x = Math.PI/2; // rotate plane
    scene.add(plane.mesh);
}

export function createHouseBase(scene) {
    const houseBox = new HouseBase();
    houseBox.mesh.position.set(25,15,25); // setting position
    scene.add(houseBox.mesh);
}

export function createHouseRoof(scene) {
    const roof = new Roof();
    roof.mesh.position.set(25,35,25);
    scene.add(roof.mesh);
}

export function createChimney(scene) {
    const chimney = new Chimney();
    chimney.mesh.position.set(32, 45, 32);
    scene.add(chimney.mesh);
}

export function createSmoke(scene) {
    smokeCloud = new SmokeCloud();
    smokeCloud.mesh.position.set(32,51,32);
    smokeCloud.mesh.rotation.x = Math.PI/2;
    scene.add(smokeCloud.mesh);
}

export function createDoor(scene) {
    const door = new Door();
    door.mesh.rotation.y = Math.PI/2; // rotate plane
    door.mesh.position.set(-0.5,10,25);
    scene.add(door.mesh);
}

export function addWindows(scene) {
    const window1 = new Window();
    const window2 = new Window();
    const window3 = new Window();
    window1.mesh.position.set(25, 15, -0.5);
    window2.mesh.position.set(25, 15, 50.5);
    window3.mesh.rotation.y = Math.PI/2;
    window3.mesh.position.set(50.5, 15, 25);
    scene.add(window1.mesh);
    scene.add(window2.mesh);
    scene.add(window3.mesh);
}

export function addHive(scene) {
    const hive = new Hive();
    hive.mesh.position.set(-40, 30,-25);
    hive.mesh.scale.y = 1.5;
    scene.add(hive.mesh);
    const hole = new HiveHole();
    hole.mesh.position.set(-40,30,-20.8);
    scene.add(hole.mesh);
}

// models

export function addBush1(scene) {
    const loader = new FBXLoader();
    loader.load( 'models/Tree_1.fbx', function ( object ) {

        object.traverse( function ( child ) {

            if ( child.isMesh ) {

                child.castShadow = true;
                child.receiveShadow = true;
                child.scale.set(0.07,0.07,0.07);
                child.position.set(-40,50,-30);
                child.rotation.x = Math.PI;
            }

        } );

        scene.add( object );

    } );
}

export function addPlant2(scene) {
    const loader = new FBXLoader();
    loader.load( 'models/Plant_2.fbx', function ( object ) {

        object.traverse( function ( child ) {

            if ( child.isMesh ) {

                child.castShadow = true;
                child.receiveShadow = true;
                child.scale.set(0.25,0.25,0.25);
                child.position.set(-40,0,25);
            }

        } );

        scene.add( object );

    } );
}

export function addPlant5(scene) {
    const loader = new FBXLoader();
    loader.load( 'models/Plant_5.fbx', function ( object ) {

        object.traverse( function ( child ) {

            if ( child.isMesh ) {
                child.castShadow = true;
                child.receiveShadow = true;
                child.scale.set(0.25,0.25,0.25);
                child.position.set(40,0,-40);
            }

        } );

        scene.add( object );

    } );
}

export function addPlant6(scene) {
    const loader = new FBXLoader();
    loader.load( 'models/Plant_6.fbx', function ( object ) {

        object.traverse( function ( child ) {

            if ( child.isMesh ) {

                child.castShadow = true;
                child.receiveShadow = true;
                child.scale.set(0.25,0.25,0.25);
                child.position.set(0,0,-40);
            }

        } );

        scene.add( object );

    } );
}