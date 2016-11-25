var fs = require("fs");
var del = require("del");
const atoms = getFiles('../css/atom');
const molecules = getFiles('../css/molecule');
const sources = atoms.concat(molecules);

const splitDataAndCode = /^\/\*\n\–\–\–\–((.|\n)*)\–\–\–\–\n\*\/\n\n((.|\n)*)/g;
const titleExp = /title:\n\t*(.*)\n\n\tcomment:/g;
const commentExp = /comment:\n\t*(.*)\n\n\tmarkup:/g;
const markupExp = /markup:\n\t*((.|\n)*)/g;
const typeExp = /\.\.\/css\/(.*?)\//g;
const removeTwoFirstsTabs = /^\t\t/gm;
const removeLastEndOfLine = /^\t\t/gm;


var blocs = [];

var docSrc = "../../build/doc.html";
var partials = [
  {name:"header", url:"head.html"},
  {name:"navHead", url:"navHead.html"},
  {name:"intro", url:"intro.html"},
  {name:"footer", url:"foot.html"}
];

//del([docSrc]);

sources.map(function(url) {
    getFileContent(url, function(data) {
        object = getHeaderAndCode(splitDataAndCode, data);
        console.log(url);
        object.type = getInfo(typeExp, url);
        object.hasExtra = false;
        if( url.indexOf('extra') >= 0)
            object.hasExtra = true;
        object.comment = getInfo(commentExp, object.header);
        object.title = getInfo(titleExp, object.header);
        object.markup = getInfo(markupExp, object.header);
        object.code = object.markup.replace(removeTwoFirstsTabs, "").escapeHTML();
        object.code = object.code.slice(0,-1);

        console.log("URLS ============");
        console.log(url, object.type, object.hasExtra);
        console.log("============");
        console.log(object);
        blocs.push(object);
    });
});

partials.map(function(object) {
    getFileContent(object.url, function(data) {
        object.html = data;
    });
});

setTimeout(function(){

    var html = "";
    var head = partials[0].html;
    var navHead = partials[1].html;
    var intro = partials[2].html;
    var foot = partials[3].html;

    var navFoot = '</nav>';

    html += head;
    html += navHead;

    html += '<div id="nav-atom" class="accordion"><h5 class="title"><a href="#atom-head">Atom</a></h5><ul>';

    blocs.map(function(bloc) {
        if(bloc.type == "atom")
            html += '<li><a href="#atom-'+bloc.title+'">' + bloc.title + '</a></li>';
    });

    html += "</ul></div>";

    html += '<div id="nav-molecule" class="accordion"><h5 class="title"><a href="#molecule-head">Molecule</a></h5><ul>';

    blocs.map(function(bloc) {
        if(bloc.type == "molecule")
            html += '<li><a href="#molecule-'+bloc.title+'">' + bloc.title + '</a></li>';
    });

    html += "</ul></div>";


    html += navFoot;
    html += intro;

    html += '<header id="atom-head"><div><h3>Atom</h3></div></header><section class="section" id="atom">';

    blocs.map(function(bloc) {
        if(bloc.type == "atom") {
          html += '<div class="bloc" id="atom-' + bloc.title + '">';
          html += '<h5>' + bloc.title + '</h5><hr/><div><div class="two-cols-verticaly-aligned">';
          html += '<div class="wrapper">' + bloc.markup + '</div>';
          html += '<div class="wrapper"><pre><code class="html">' + bloc.code + '</code></pre></div>';
          html += '</div></div></div>';
        }
    });

    html += '</section><header id="molecule-head"><div><h3>Molecule</h3></div></header><section class="section" id="molecule">';

    blocs.map(function(bloc) {
        if(bloc.type == "molecule") {
          html += '<div class="bloc" id="molecule-' + bloc.title + '">';
          html += '<h5>' + bloc.title + '</h5><hr/><div><div class="two-cols-verticaly-aligned">';
          html += '<div class="wrapper">' + bloc.markup + '</div>';
          html += '<div class="wrapper"><pre><code class="html">' + bloc.code + '</code></pre></div>';
          html += '</div></div></div>';
        }
    });

    html += '</section>';

    html += foot;

    //console.log(html);

    fs.writeFile (docSrc, html, function(err) {
        if (err) throw err;
        console.log('complete');
    });

}, 3000);

// EscapeHTML

String.prototype.escapeHTML = function () {
  return(
    this.replace(/>/g,'&gt;').
         replace(/</g,'&lt;').
         replace(/"/g,'&quot;')
  );
};


// Regexp matches

function getInfo(re, data) {

        var result = [];
        var info = "";

        while((result = re.exec(data)) != null) {
            info = result[1];
        }

        return info;

}

function getHeaderAndCode(re, data) {

        var result = [];

        var object = {header: "", "code": ""};

        while((result = re.exec(data)) != null) {
            object.header = result[1];
            object.code = result[3];
        }

        return object;

}


// File system

function getFiles (dir, files_){
    files_ = files_ || [];
    var files = fs.readdirSync(dir);
    for (var i in files){
        var name = dir + '/' + files[i];
        if (!fs.statSync(name).isDirectory()){
          files_.push(name);
        }
        // else {
        //   getFiles(name, files_);
        // }
    }
    return files_;
}

function getFileContent(srcPath, callback) {
    fs.readFile(srcPath, 'utf8', function (err, data) {
        if (err) throw err;
        callback(data);
        }
    );
}

function copyFileContent(savPath, srcPath) {
    getFileContent(srcPath, function(data) {
        fs.writeFile (savPath, data, function(err) {
            if (err) throw err;
            console.log('complete');
        });
    });
}
