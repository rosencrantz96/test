// app.js
function login(username, password) {
 	// 잘못된 조건처리로인해로그인오류발생
	if (username && password) {
 		console.log("Login successful");
 	} else {
 		console.log("Login failed");
 	}
 }
// 버그: username
