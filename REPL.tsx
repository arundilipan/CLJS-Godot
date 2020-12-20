export default class REPL extends godot.Node {
  wsClient: godot.WebSocketClient;
  wsURL = "ws://127.0.0.1:9630";

  constructor() {
    super();
  }

  _ready() {
    this.wsClient = new godot.WebSocketClient()

    this.wsClient.connect(
      godot.WebSocketClient.connection_closed,
      (wasClean) => { 
        console.log("Successfully exited")
        this.set_process(false)
      }
    );

    this.wsClient.connect(
        godot.WebSocketClient.connection_closed,
        (wasClean) => { 
          console.log("Exited with error")
          this.set_process(false)
        }
      );

    this.wsClient.connect(
        godot.WebSocketClient.connection_established,
        (proto) => { 
          console.log("Connected with protocol: ", proto)
          this.wsClient.get_peer(1).put_var("Connected")
        }
    )

    this.wsClient.connect(
        godot.WebSocketClient.data_received,
        () => { 
          console.log("Received data ", this.wsClient.get_peer(1).get_var())
        }
    )

    let result = this.wsClient.connect_to_url(this.wsURL)
    if (result != godot.OK) {
        console.log("Unable to connect")
        this.set_process(false)
    } else {
      console.log("Connected to REPL")
    }
  }

  _process() {
      this.wsClient.poll()
  }
}
