// Routes
// =============================================================

//A GET Route to /survey which should display the survey page.
app.get('/survey', function(req, res){
  res.sendFile(path.join(__dirname, 'survey.html'));
})

//A default USE route that leads to home.html which displays the home page.

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'home.html'));
})



//List of Friends
app.get('/api/', function(req, res){

    res.json();
  }
)


// Add new friend - takes in JSON input
app.post('/api/new', function(req, res){

  var newFriend = req.body;
  

  console.log(newFriend);

  friends.push(newFriend);

  res.json(newFriend);
})
