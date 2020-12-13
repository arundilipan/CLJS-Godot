import { printRandomVector } from './public/js/demo'

export default class TestCLJS extends godot.Node2D {
	
	// Declare member variables here. Examples:
	a = 2;
	b = "text";
	
	constructor() {
		super();
	}
	
	// Called when the node enters the scene tree for the first time.
	_ready() {
		printRandomVector()
	}
	
	// Called every frame. 'delta' is the elapsed time since the previous frame.
	_process(delta) {
		
	}
}
