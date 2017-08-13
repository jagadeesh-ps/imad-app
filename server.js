var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
        var 'article-one': {
            title: "Article-one | Jagadeesh",
            heading:  "Article one",
            date: "Aug 13, 2017",
            content: `
                  <p> This is article one.  This is article one.  This is article one.  This is article one.  This is article one.
                      This is article one. This is article one. This is article one. This is article one. This is article one.
                      This is article one. This is article one. This is article one. This is article one. This is article one.
                  </p>`
},
        var 'article-two': {
            title: "Article-two | Jagadeesh",
            heading:  "Article two",
            date: "Aug 13, 2017",
            content: `
                  <p> 
                   This is article two.
                  </p>`
    },
        var 'article-three': {
            title: "Article-three | Jagadeesh",
            heading:  "Article three",
            date: "Aug 13, 2017",
            content: `
                  <p>
                   This is article three.
                  </p>`
        }
};

function createTemplate (data) {
        var title = data.title;
        var date = data.date;
        var heading = data.heading;
        content = data.content;
        var htmlTemplate = `
          <html>
            <head>
                <title>
                   ${title}
                </title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link href="/ui/style.css" rel="stylesheet" />
            </head>
            <body>
                <div class="container">
                    <div>
                        <a href='/'>Home</a>
                    </div>
                    <hr/>
                    <div>
                        ${heading}
                    </div>
                    <div>
                        ${date}
                    </div>
                    <div>
                       ${content}
                    </div>
                </div>
            </body>
         </html> 
         `;
         return htmlTemplate;
}
app.get('/:articleName', function(req, res){
   //articleName == article-one
   //articles[articleName] == {} content object for article one
   var articleName = req.params.articleName;
   res.send(createTemplate(articles[articleName]))
});

app.get('/article-two', function(req, res){
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));  
});

app.get('/article-three', function(req, res){
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html')); 
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
