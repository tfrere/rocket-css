var fs = require("fs");
var del = require("del");

// EscapeHTML

String.prototype.escapeHTML = function () {
  return(
    this.replace(/>/g,'&gt;').
         replace(/</g,'&lt;').
         replace(/"/g,'&quot;')
  );
};

// Regex functions

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

// Regex

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

// Gulp task

module.exports = function (gulp, plugins, paths) {
	return function () {

    const atoms = getFiles('./src/css/atom');
    const molecules = getFiles('./src/css/molecule');
    const modifiers = getFiles('./src/css/modifier');
    const templates = getFiles('./src/css/template');

    var blocs = [];
    var navTemplate = "";

    var symbolTemplate = "";
      var iconBlocks = "";
      var flagHtml = "";
      var flagBlocks = "";
      var socialHtml = "";
      var socialBlocks = "";
      var easeBlocks = "";

    var animationTemplate = "";
    var atomTemplate = "";
    var moleculeTemplate = "";
    var modifierTemplate = "";
    var templateTemplate = "";

    getFileContent('./src/templates/navHead.jade', function(data) {
      navTemplate = data;
    });

    // Generate symbol.jade

    symbolTemplate +=     'header#symbol-head'
               + '\r\n' + '  div'
               + '\r\n' + '    h3 Symbol'
               + '\r\n' + 'section.section#symbol' + '\r\n';

    getFileContent('./src/css/helper/const/_linear-icon.scss', function(data) {

      const icons = getEachInfo(getEachIcon, data);
      const infoText = 'i.icon.-sun';

      symbolTemplate +=   '  .bloc#symbol-icon'
             + '\r\n' +   '    h5 Icon'
             + '\r\n' +   '    a.button.toggle-icon-size'
             + '\r\n' +   '      i.icon.text-size'
             + '\r\n' +   '    input.search#icon-search(type="text" placeholder="Filter by name...")'
             + '\r\n' +   '    hr'
             + '\r\n' +   '    div'
             + '\r\n' +   '      | To use icons, <code class="html">' + infoText.escapeHTML() + '</code>. Check this  => <a target="_blank" href="https://en.wikipedia.org/wiki/Semiotics">Semiotics</a>'
             + '\r\n' +   '      ul.list' + '\r\n';

      icons.map(function(iconName) {
        symbolTemplate += '        li.icon-block'
             + '\r\n' +   '          i.icon.-' + iconName
             + '\r\n' +   '          .tag.-pointing.-top'
             + '\r\n' +   '            span.name ' + iconName + '\r\n';
      });

    });

    getFileContent('./src/css/helper/const/_flag.scss', function(data) {
      const flags = getEachInfo(getEachFlag, data);
      flagHtml +=  '      #symbol-flag.bloc'
      + '\r\n' +   '        h5 Flag'
      + '\r\n' +   '        hr'
      + '\r\n' +   '        div' + '\r\n';
      flags.map(function(flag) {
      flagHtml +=  '          div.flag-block'
        + '\r\n' + '            i.flag.-' + flag
        + '\r\n' + '            .tag.-pointing.-top'
        + '\r\n' + '              span '+ flag + '\r\n' ;
      });
    });

    getFileContent('./src/css/helper/const/_social.scss', function(data) {
      const socials = getEachInfo(getEachSocial, data);
      socialHtml += '      #symbol-social.bloc'
      + '\r\n' +    '        h5 Social'
      + '\r\n' +    '        hr'
      + '\r\n' +    '        div' + '\r\n';
      socials.map(function(social) {
      socialHtml += '          div.social-block'
        + '\r\n' +  '            i.social.-' + social
        + '\r\n' +  '            .tag.-pointing.-top'
        + '\r\n' +  '              span ' + social + '\r\n';
      });
    });

    // Generate ease.jade

    animationTemplate +=   'header#animation-head'
                + '\r\n' + '  div'
                + '\r\n' + '    h3 Animation'
                + '\r\n' + 'section#animation.section' + '\r\n';

    getFileContent('./src/css/helper/const/_ease.scss', function(data) {
      const easings = getEachObjectInfo(getEachEase, data);
      animationTemplate += '  .bloc#animation-ease'
                + '\r\n' + '    h5 Easings'
                + '\r\n' + '    hr'
                + '\r\n' + '    div' + '\r\n';
      easings.map(function(ease) {
        easeBlocks
                +=         '      .ease-wrapper'
                + '\r\n' + '        .ease-demo.ease-demo-' + ease.name.trim()
                + '\r\n' + '          .grid-wrapper'
                + '\r\n' + '            .grid'
                + '\r\n' + '              .line'
                + '\r\n' + '              .line'
                + '\r\n' + '              .line'
                + '\r\n' + '              .vertical-line'
                + '\r\n' + '              .vertical-line'
                + '\r\n' + '              .vertical-line'
                + '\r\n' + '          .dot-wrapper'
                + '\r\n' + '            .dot.dot-square.dot-straight.dot-' + ease.name.trim()
                + '\r\n' + '              span ' + ease.name.trim() + '\r\n';
      });

      animationTemplate += easeBlocks;
    });


    // Get css files

    indent = " ";
    const sources = atoms.concat(molecules).concat(modifiers).concat(templates);

    sources.map(function(url) {
      getFileContent(url, function(data) {
        object = getHeaderAndCode(splitDataAndCode, data);
        object.type = getInfo(typeExp, url);
        object.hasExtra = false;
        if( url.indexOf('extra') >= 0)
          object.hasExtra = true;
        object.comment = getInfo(commentExp, object.header);
        object.title = getInfo(titleExp, object.header);
        object.markup = getInfo(markupExp, object.header).replace(/^(?!\s*$)/mg, indent.repeat(6));
        object.markup = object.markup.replace(/\t+/g, '  ');
        object.code = object.markup.escapeHTML().replace(/^(?!\s*$)/mg, indent.repeat(4));
        object.code = object.code.slice(0,-1);

        const script = getInfo(scriptExp, object.header);
        if(script.length > 5)
          object.script = script.replace(/\t+/g, '  ');

        blocs.push(object);

      });
    });


    setTimeout(function () {
      //
      // // Generate nav.jade
      // var elements = ['atom', 'molecule', 'modifier', 'template'];
      //
      // var buildNav = function(elem) {
      //   var template = '  #nav-' + elem + '.accordion(ui-sref-active="active")'
      //        + '\r\n' + '    h5.title'
      //        + '\r\n' + '      a(ui-sref="nav.' + elem + '") ' + elem
      //        + '\r\n' + '    ul'+ '\r\n';
      //  blocs.map(function(bloc) {
      //    if(bloc.type == elem)
      //        template += '      li'
      //           + '\r\n' +  '        a(href="#' + elem + '-' + bloc.title + '") ' + bloc.title + '\r\n';
      //  });
      //  return template;
      // }
      //
      // elements.map(function(elem) {
      //   navTemplate += buildNav(elem);
      // });

      navTemplate += 'div(ui-view="")';

      // Generate atom.jade etc..

      var buildBlocs = function(elem, i) {

        var template = 'header#' + elem + '-head'
        + '\r' + '  div'
        + '\r' + '    h3 ' + elem + ''
        + '\r' + 'section.section#' + elem + '' + '\r';
        blocs.map(function(bloc) {
          if(bloc.type == elem) {
            template += '  .bloc#' + elem + '-' + bloc.title
               + '\r' + '    h5 ' + bloc.title
               + '\r' + '    hr'
               + '\r' + '    div'
               + '\r' + '      div.two-cols-verticaly-aligned'
               + '\r' + '        .wrapper.sample.'
               + '\r' +            bloc.markup
               + '\r' + '        .wrapper.sample-code'
               + '\r' + '          header'
               + '\r' + '            h6.desc HTML'
               + '\r' + '            fieldset.copy'
               + '\r' + '              button.button.copy-button.-line-primary.-no-gradient.-no-border(data-clipboard-target="#' + bloc.title + '-code")'
               + '\r' + '                i.icon.-floppy-disk'
               + '\r' + '              .tag.-success.-pointing.-left.toggle-copy-success'
               + '\r' + '                span Copied'
               + '\r' + '          div(hljs).html#' + bloc.title + '-code.'
               + '\r' + bloc.code + '\r';
            if (bloc.script) {
            template += '          div(hljs).javascript.' + bloc.title + '-code.\r' + bloc.script.replace(/^(?!\s*$)/mg, indent.repeat(8)) + '\r';
            }
          }
        });
        template += '\rfooter.footer';
        template += '\r  h5'
        template += '\r    a(ui-sref="nav.' + elements[i + 1] + '") ' + elements[i + 1];
        template += '\rscript.';
        console.log(i);
        blocs.map(function(bloc) {
          if(bloc.type == elem && bloc.script)
            template += '\r' + bloc.script + '\r';
        });

        return template;

      };

      // elements.map(function(elem, i) {
      //   fs.writeFile ("./src/templates/" + elem + ".jade", buildBlocs(elem, i), function(err) {
      //     if (err) throw err;
      //     console.log('nav complete');
      //   });
      // });

      symbolTemplate += flagHtml;
      symbolTemplate += socialHtml;

      fs.writeFile ("./src/templates/nav.jade", navTemplate, function(err) {
        if (err) throw err;
        console.log('nav complete');
      });
      fs.writeFile ("./src/templates/symbol.jade", symbolTemplate, function(err) {
        if (err) throw err;
        console.log('symbol complete');
      });
      fs.writeFile ("./src/templates/animation.jade", animationTemplate, function(err) {
        if (err) throw err;
        console.log('animation complete');
      });

    }, 3000);

	};
};
