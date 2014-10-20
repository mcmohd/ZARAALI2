#!/usr/bin/env node

var github = require('octonode');
var client = github.client({
  username: 'mcmohd',
  password: 'cohondob1971'
});

/*
client.get('/repos/mcmohd/tutorialspoint/git/trees/3e6339a051487ac786b98a8842657648c1b5e5f2', {"recursive":"1"}, function (err, status, body, headers) {
  console.log(err); //json object
  console.log(body); //json object
});
*/
var myTree = [ {
      "path": "file.rb",
      "mode": "100644",
      "type": "blob",
      "content":"This is test"
    }
  ];
/*
client.post('/repos/mcmohd/compileonline/git/trees', {tree:myTree}, function (err, status, body, headers) {
  console.log(err); //json object
  console.log(body); //json object
});
*/

client.delete('/repos/mcmohd/compileonline', {}, function (err, status, body, headers) {
  console.log(err); //json object
  console.log(body); //json object
});

// List Repos
//  Check if user has compileonline repos
//  if not then create compileonline repos
//
//Create a parent repo compileonline
/*
client.post('/user/repos', { "name": "compileonline", "description": "Repository to store compileonline projects" }, function (err, status, body, headers) {
  console.log(body); //json object
});
*/


/* Get the content of the repo */
/*
client.get('repos/mcmohd/tutorialspoint/branches/master', { }, function (err, status, body, headers) {
  console.log(body); //json object
});
*/
//var ghrepo = client.repo('mcmohd/tutorialspoint');
/*
 * List down all the files in the repo
ghrepo.contents('/', function(err, data, headers ){
  console.log(data); //json object
});
*/

/* Push a new file in the repo */
/*
ghrepo.createContents('/compileonline.txt', 'commit message', 'content goes here....', function(err, data, headers ){
  console.log(data); //json object
});
*/

/* Create Project specific path */
/*
ghrepo.createContents('project2/test/mohtashim/testing3/testing4/line.txt', 'commit message', 'content again goes here....', function(err, data, headers ){
  console.log(data); //json object
});
*/

/*
var filename = 'project2/line4.txt';
ghrepo.contents(filename, function (err, data, headers) {
  if( err){
      // This is new file to be created.
      ghrepo.createContents(filename, 'New file created by the system', 'New file content', function(err, data, headers ){
           console.log("<<<< New"); //json object
           console.log(data); //json object
           console.log( err);
      });
  }else{
      // It means file already exists
      var sha = data.sha;
      ghrepo.updateContents(filename, 'Latest update by the system', 'updated file content', sha, function(err, data, headers ){
           console.log("<<<< Update"); //json object
           console.log(data); //json object
           console.log(err);
      });
  }
});

*/
