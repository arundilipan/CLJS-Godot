export default class REPL extends godot.Node {
	constructor() {
		super();
		this.wsURL = "ws://localhost:9630";
		this.wsClient = new godot.WebSocketClient();
	}
	_ready() {
		this.wsClient.connect(godot.WebSocketClient.connection_closed, this, () => {
			console.log("Successfully exited");
			this.set_process(false);
		});
		this.wsClient.connect(godot.WebSocketClient.connection_closed, this, () => {
			console.log("Exited with error");
			this.set_process(false);
		});
		this.wsClient.connect(godot.WebSocketClient.connection_established, this, (proto) => {
			console.log("Connected with protocol: ", proto);
			this.wsClient.get_peer(1).put_packet(godot.var2bytes("Connected"));
		});
		this.wsClient.connect(godot.WebSocketClient.data_received, this, () => {
			console.log("Connected with protocol: ", this.wsClient.get_peer(1).get_packet().get_string_from_utf8());
		});
		let result = this.wsClient.connect_to_url(this.wsURL);
		if (result != godot.OK) {
			console.log("Unable to connect");
			this.set_process(false);
		}
	}
	_process() {
		this.wsClient.poll();
	}
}
//# sourceMappingURL=REPL.js.map
