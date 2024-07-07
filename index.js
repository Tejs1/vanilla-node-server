const http = require("http")

// Create the server
let server = http.createServer(function (req, res) {
	// Write a response to the client
	res.write("Hello World!")
	// End the response
	res.end()
})

// The server listens on port 8080
server.listen(8080, () => {
	console.log("Server is running on http://localhost:8080")
})
