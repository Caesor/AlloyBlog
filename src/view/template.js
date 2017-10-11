export function template(body, data){
	return `
		<!DOCTYPE html>
		<html lang="en">
			<head>
				<meta charset="UTF-8" />
				<title>Document</title>
			</head>
			<link rel="stylesheet" href="http://localhost:3000/css/normalize.css">
			<link rel="stylesheet" href="http://localhost:3000/css/main.min.css">
			<link rel="stylesheet" href="http://localhost:3000/css/atom-one-dark.css">
			<body>
				<div id="app">${body}</div>
			</body>
			<script>window.__DATA__=${JSON.stringify(data)}</script>
			<script type="text/javascript" src="http://localhost:3000/js/main.min.js"></script>
		</html>`
}