var fs = require("fs");
var del = require("del");
const atoms = getFiles('../src/styles/atom');
const molecules = getFiles('../src/styles/molecule');
const sources = atoms.concat(molecules);

const splitDataAndCode = /^\/\*\n\–\–\–\–((.|\n)*)\–\–\–\–\n\*\/\n\n((.|\n)*)/g;
const titleExp = /title:\n\t*(.*)\n\n\tcomment:/g;
const commentExp = /comment:\n\t*(.*)\n\n\tmarkup:/g;
const markupExp = /markup:\n\t*((.|\n)*)/g;
const typeExp = /\.\.\/src\/styles\/(.*?)\//g;
const removeTwoFirstsTabs = /^\t\t/gm;
const removeLastEndOfLine = /^\t\t/gm;


var blocs = [];

var docSrc = "../dist/doc.html";
var partials = [{name:"header", url:"head.html"}, {name:"navHead", url:"navHead.html"}, {name:"intro", url:"intro.html"}, {name:"footer", url:"foot.html"}]; 

del([docSrc]);

sources.map(function(url) {
    getFileContent(url, function(data) {

        object = getHeaderAndCode(splitDataAndCode, data);

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

    var contentFoot = '</div>';

    html += head;
    html += navHead;

    html += "<h4>Atom</h4><ul>";

    blocs.map(function(bloc) {
        if(bloc.type == "atom")
            html += '<li><a href="#'+bloc.title+'">' + bloc.title + '</a></li>';
    });

    html += "</ul>";

    html += "<h4>Molecule</h4><ul>";

    blocs.map(function(bloc) {
        if(bloc.type == "molecule")
            html += '<li><a href="#'+bloc.title+'">' + bloc.title + '</a></li>';
    });

    html += "</ul>";


    html += navFoot;
    html += intro;

    html += "<div class='doc--content-type'><div class='container'><h2>Atom</h2></div></div><div class='container'>";

    blocs.map(function(bloc) {
        if(bloc.type == "atom") {
            html += '<div class="row" id="' + bloc.title + '">';
            html += '<div class="twelve col"><h3>' + bloc.title + '<span>.scss</span></h3></div>';
            html += '<div class="three col"><p>' + bloc.comment + '</p></div>';
            html += '<div class="eight col offset-one">' + bloc.markup + '</div>';
            html += '<pre class="twelve col doc--code-example"><code class="html">' + bloc.code + '</code></pre>';
            html += '</div>';
        }
    });

    html += "</div><div class='doc--content-type'><div class='container'><h2>Molecule</h2></div></div><div class='container'>";

    blocs.map(function(bloc) {
        if(bloc.type == "molecule") {
            html += '<div class="row" id="' + bloc.title + '">';
            html += '<div class="twelve col"><h3>' + bloc.title + '</h3></div>';
            html += '<div class="three col"><p>' + bloc.comment + '</p></div>';
            html += '<div class="eight col offset-one">' + bloc.markup + '</div>';
            html += '<pre class="twelve col doc--code-example"><code class="html">' + bloc.code + '</code></pre>';
            html += '</div>';
        }
    });

    html += '</div>';

    html += contentFoot;
    html += foot;

    //console.log(html);

    fs.writeFile (docSrc, html, function(err) {
        if (err) throw err;
        console.log('complete');
    });

}, 1000);

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
        if (fs.statSync(name).isDirectory()){
            getFiles(name, files_);
        } else {
            files_.push(name);
        }
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
