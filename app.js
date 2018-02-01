// cookie-parser middeware

const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser());

app.get('/', (req, res) => {
	console.log(req.cookies);

    let greeting = '';
	if (!req.cookies.hasVisited) {
		res.cookie('hasVisited', '1');
		greeting = "<h1>Welcome to My Page!</h1>";
	} else {
		var count = parseInt(req.cookies.hasVisited);
		res.cookie('hasVisited', ++count);
		greeting = "<h1>Welcome Back! (visit count = " + count + ")</h1>";
	}

    let page = `
        <html><head><title>Cookie</title></head>
        <body>
            ${greeting}
        </body>
        </html>
    `;
	res.send(page);
});

const port = process.env.PORT || 3000;
app.listen(port,() => {
    console.log('server is running at port ', port);
});