var fs = require("fs");
var del = require("del");

const atoms = getFiles('./src/css/atom');
const molecules = getFiles('./src/css/molecule');
const modifiers = getFiles('./src/css/modifier');

const getEachIcon = /.icon.-(.*):before/gm;
const getEachSocial = /.social.-(.*) {/gm;
const getEachFlag = /.flag.-(.*) {/gm;
const getEachEase = /(.*):.*cubic-bezier\((.*)\),/gm;
const splitDataAndCode = /^\/\*\n\–\–\–\–([\d\S\t \n]*)\–\–\–\–\n\*\/\n\n([\d\S\t \n]*)/g;
const titleExp = /title:\n\t*(.*)\n\n\tcomment:/g;
const commentExp = /comment:\n\t*([\d\S\n\t ]*)\n\n\tmarkup:/g;
const markupExp = /markup:\n\t*([\d\S\n\t ]*)script:/g;
const scriptExp = /script:\n\t*([\d\S\n\t ]*)/g;
const typeExp = /\.\/src\/css\/(.*?)\//g;
const removeTwoFirstsTabs = /^\t\t/gm;
const removeLastEndOfLine = /^\t\t/gm;


var blocs = [];

var docSrc = "./build/doc.html";
var partials = [
  {name:"header", url:"./src/doc/head.html"},
  {name:"navHead", url:"./src/doc/navHead.html"},
  {name:"intro", url:"./src/doc/intro.html"},
  {name:"footer", url:"./src/doc/foot.html"}
];

var iconHtml = " ";
var iconBlocks = " ";
var flagHtml = " ";
var flagBlocks = " ";
var socialHtml = " ";
var socialBlocks = " ";
var jqueryHtml = " ";
var easeHtml = " ";
var easeBlocks = " ";

getFileContent('./src/css/helper/const/_linear-icon.scss', function(data) {
  const icons = getEachInfo(getEachIcon, data);
  icons.map(function(iconName) { iconBlocks += '<li class="icon-block"><i class="icon -' + iconName + '"></i><div class="tag -pointing -top"><span class="name">'+iconName+'</span></div></li>' });
  const infoText = '<i class="icon -sun"></i>';
  iconHtml += '<div class="bloc" id="symbol-icon"><h5>Icon</h5><input type="text" class="search" id="icon-search" placeholder="Filter by name..."/><hr/><div><p>To use icons, <code class="html">' + infoText.escapeHTML() + '</code>. Check this  => <a target="_blank" href="https://en.wikipedia.org/wiki/Semiotics">Semiotics</a></p><ul class="list">';
  iconHtml += iconBlocks;
  iconHtml += '</ul></div></div>';
});

getFileContent('./src/css/helper/const/_flag.scss', function(data) {
  const flags = getEachInfo(getEachFlag, data);
  flags.map(function(flag) { flagBlocks += '<div class="flag-block"><i class="flag -' + flag + '"></i><div class="tag -pointing -top"><span>'+flag+'</span></div></div>' });
  flagHtml += '<div class="bloc" id="symbol-flag"><h5>Flag</h5><hr/><div>';
  flagHtml += flagBlocks;
  flagHtml += '</div></div>';
});

getFileContent('./src/css/helper/const/_social.scss', function(data) {
  const socials = getEachInfo(getEachSocial, data);
  socials.map(function(social) { socialBlocks += '<div class="social-block"><i class="social -' + social + '"></i><div class="tag -pointing -top"><span>'+social+'</span></div></div>' });
  socialHtml += '<div class="bloc" id="symbol-social"><h5>Social</h5><hr/><div>';
  socialHtml += socialBlocks;
  socialHtml += '</div></div>';
});

getFileContent('./src/css/helper/const/_ease.scss', function(data) {
  const easings = getEachObjectInfo(getEachEase, data);
  easings.map(function(ease) {
    easeBlocks
     += '<div class="ease-demo  ease-demo-' + ease.name.trim() + '">'
        + '<div class="grid-wrapper">'
          + '<div class="grid">'
            + '<div class="line" ></div>'
            + '<div class="line" ></div>'
            + '<div class="line" ></div>'
            + '<div class="vertical-line" ></div>'
            + '<div class="vertical-line" ></div>'
            + '<div class="vertical-line" ></div>'
          + '</div>'
        + '</div>'
        + '<div class="dot-wrapper">'
          + '<div class="dot dot-square dot-straight dot-' + ease.name.trim() + '"></div>'
        + '</div>'
        + '<span><span></span></span>'
    + '</div>';
    //  + '<div class="ease-block ease-demo-' + ease.name.trim() + '">'
    //     + '<div class="grid-wrapper">'
    //       + '<div class="grid">'
    //         + '<div class="line" ></div>'
    //         + '<div class="line" ></div>'
    //         + '<div class="line" ></div>'
    //         + '<div class="vertical-line" ></div>'
    //         + '<div class="vertical-line" ></div>'
    //         + '<div class="vertical-line" ></div>'
    //       + '</div>'
    //     + '</div>'
    //     + '<div class="dot-wrapper">'
    //       + '<div class="dot dot-square dot-straight dot-' + ease.name.trim() + '"></div>'
    //     + '</div>'
    //     + '<span class="svg-dots"></span>'
    //     + '<span class="svg-lines"></span>'
    //     + '<span class="curve"></span>'
    // + '</div>';
  });
  easeHtml += '<div class="bloc" id="animation-ease"><h5>Easings</h5><hr/><div> <div class="ease-wrapper">';
  easeHtml += easeBlocks;
  easeHtml += '</div></div></div>';
});

getFileContent('./src/doc/jquery.js', function(data) {
  jqueryHtml = data;
});

const sources = atoms.concat(molecules).concat(modifiers);


sources.map(function(url) {
  getFileContent(url, function(data) {
    object = getHeaderAndCode(splitDataAndCode, data);
    object.type = getInfo(typeExp, url);
    object.hasExtra = false;
    if( url.indexOf('extra') >= 0)
      object.hasExtra = true;
    object.comment = getInfo(commentExp, object.header);
    const script = getInfo(scriptExp, object.header);
    if(script.length > 5) {
      object.script = script;
    }
    object.title = getInfo(titleExp, object.header);
    object.markup = getInfo(markupExp, object.header);
    object.code = object.markup.replace(removeTwoFirstsTabs, "").escapeHTML();
    object.code = object.code.slice(0,-1);
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

    //console.log(blocs);

    var navFoot = '</nav>';

    html += head;
    html += navHead;

    html += '<div id="nav-animation" class="accordion"><h5 class="title"><a href="#animation-head">Animation</a></h5><ul>';

    html += '<li><a href="#animation-ease">Easings</a></li>';

    html += "</ul></div>";

    html += '<div id="nav-symbol" class="accordion"><h5 class="title"><a href="#symbol-head">Symbol</a></h5><ul>';

    html += '<li><a href="#symbol-icon">Icon</a></li>';
    html += '<li><a href="#symbol-flag">Flag</a></li>';
    html += '<li><a href="#symbol-social">Social</a></li>';

    html += "</ul></div>";

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

    html += '<div id="nav-modifier" class="accordion"><h5 class="title"><a href="#molecule-head">Modifier</a></h5><ul>';

    blocs.map(function(bloc) {
      if(bloc.type == "modifier")
          html += '<li><a href="#modifier-'+bloc.title+'">' + bloc.title + '</a></li>';
    });

    html += "</ul></div>";


    html += navFoot;
    html += intro;

    html += '<header id="animation-head"><div><h3>Animation</h3></div></header><section id="ease" class="section">';
    html += easeHtml;
    html += '</section>';

    html += '<header id="symbol-head"><div><h3>Symbol</h3></div></header><section id="symbol" class="section">';
    html += iconHtml;
    html += flagHtml;
    html += socialHtml;
    html += '</section>';

    html += '<header id="atom-head"><div><h3>Atom</h3></div></header><section class="section" id="atom">';

    blocs.map(function(bloc) {
      if(bloc.type == "atom") {
        html += '<div class="bloc" id="atom-' + bloc.title + '">';
        html += '<h5>' + bloc.title + '</h5><hr/><div><div class="two-cols-verticaly-aligned">';
        html += '<div class="wrapper sample">' + bloc.markup + '</div>';
        html += '<div class="wrapper sample-code"><header><h6 class="desc">HTML</h6><fieldset class="copy" ><button class="button copy-button -line-primary -no-gradient -no-border" data-clipboard-target="#'+bloc.title+'-code"><i class="icon -floppy-disk"></i></button><div class="tag -success -pointing -left toggle-copy-success"><span>Copied</span></div></fieldset></header><pre>';
        html += '<code class="html" id="'+bloc.title+'-code">' + bloc.code + '</code>';
        if (bloc.script)
          html += '<code class="javascript" id="'+bloc.title+'-code">' + bloc.script + '</code>';
        html += '</pre></div>';
        html += '</div></div></div>';
      }
    });

    html += '</section><header id="molecule-head"><div><h3>Molecule</h3></div></header><section class="section" id="molecule">';

    blocs.map(function(bloc) {
      if(bloc.type == "molecule") {
        html += '<div class="bloc" id="molecule-' + bloc.title + '">';
        html += '<h5>' + bloc.title + '</h5><hr/><div><div class="two-cols-verticaly-aligned">';
        html += '<div class="wrapper sample">' + bloc.markup + '</div>';
        html += '<div class="wrapper sample-code"><header><h6 class="desc">HTML</h6><fieldset class="copy" ><button class="button copy-button -line-primary -no-gradient -no-border" data-clipboard-target="#'+bloc.title+'-code"><i class="icon -floppy-disk"></i></button><div class="tag -success -pointing -left toggle-copy-success"><span>Copied</span></div></fieldset></header><pre>';
        html += '<code class="html" id="'+bloc.title+'-code">' + bloc.code + '</code>';
        if (bloc.script)
          html += '<code class="javascript" id="'+bloc.title+'-code">' + bloc.script + '</code>';
        html += '</pre></div>';
        html += '</div></div></div>';
      }
    });

    html += '</section><header id="modifier-head"><div><h3>Modifier</h3></div></header><section class="section" id="modifier">';

    blocs.map(function(bloc) {
      if(bloc.type == "modifier") {
        html += '<div class="bloc" id="modifier-' + bloc.title + '">';
        html += '<h5>' + bloc.title + '</h5><hr/><div><div class="two-cols-verticaly-aligned">';
        html += '<div class="wrapper sample">' + bloc.markup + '</div>';
        html += '<div class="wrapper sample-code"><header><h6 class="desc">HTML</h6><fieldset class="copy" ><button class="button copy-button -line-primary -no-gradient -no-border" data-clipboard-target="#'+bloc.title+'-code"><i class="icon -floppy-disk"></i></button><div class="tag -success -pointing -left toggle-copy-success"><span>Copied</span></div></fieldset></header><pre>';
        html += '<code class="html" id="'+bloc.title+'-code">' + bloc.code + '</code>';
        if (bloc.script)
          html += '<code class="javascript" id="'+bloc.title+'-code">' + bloc.script + '</code>';
        html += '</pre></div>';
        html += '</div></div></div>';
      }
    });

    html += '</section>';

    html += foot;
    html += "<script>";
    html += jqueryHtml;
    html += "</script>";
    html += "<script>";
    html += "$(document).ready(function () {";
    blocs.map(function(bloc) {
      if(bloc.script)
        html += bloc.script;
    });
    html += "});";
    html += "</script>";

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

function getEachInfo(re, data) {

        var result = [];
        var info = [];

        while((result = re.exec(data)) != null) {
            info.push(result[1]);
        }
        return info;
}

function getEachObjectInfo(re, data) {

        var result = [];
        var info = [];

        while((result = re.exec(data)) != null) {
            info.push({name: result[1], class: result[2]});
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
        if (!fs.statSync(name).isDirectory()) {
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
