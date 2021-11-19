const express = require ('express');
const app = express();
const port = process.env.PORT || 8080;

app.all('*', (req, res,next ) => {
	console.log("Checking the parameters");
	next();
});
app.get('/api/v1/githubUser/:githubUserName/avatar', (req,res) => { res.send("Avatar") });
app.get('/api/v1/githubUser/:githubUserName/repo/:repoName', (req,res) => { res.send("repoName") });
app.get('/api/v1/githubUser/:githubUserName/repo/:repoName/contributers', (req,res) => { res.send("contributers") });
app.get('/profile',
	(req,res) => {
		console.log ("There is no spaces between & no extra numbers");
		res.json("Avatar");
	}
);

app.listen(port);

console.log(`Server running on port ${port}`);
