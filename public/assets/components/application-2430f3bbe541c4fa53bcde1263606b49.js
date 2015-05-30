var ____Class0=React.Component;for(var ____Class0____Key in ____Class0){if(____Class0.hasOwnProperty(____Class0____Key)){Header[____Class0____Key]=____Class0[____Class0____Key];}}var ____SuperProtoOf____Class0=____Class0===null?null:____Class0.prototype;Header.prototype=Object.create(____SuperProtoOf____Class0);Header.prototype.constructor=Header;Header.__superConstructor__=____Class0;function Header(){"use strict";if(____Class0!==null){____Class0.apply(this,arguments);}}
  Object.defineProperty(Header.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
    return (
      React.createElement("nav", {className: "navbar navbar-fixed-top navbar-inverse"}, 
        React.createElement("div", {className: "container"}, 
          React.createElement("div", {className: "navbar-header"}, 
            React.createElement("button", {"aria-controls": "navbar", "aria-expanded": "false", className: "navbar-toggle collapsed", "data-target": "#navbar", "data-toggle": "collapse", type: "button"}, 
              React.createElement("span", {className: "sr-only"}, "Toggle navigation"), 
              React.createElement("span", {className: "icon-bar"}), 
              React.createElement("span", {className: "icon-bar"}), 
              React.createElement("span", {className: "icon-bar"})
            ), 
            React.createElement("a", {className: "navbar-brand", href: "#"}, "Project name")
          ), 
          React.createElement("div", {className: "collapse navbar-collapse", id: "navbar"}, 
            React.createElement("ul", {className: "nav navbar-nav"}, 
              React.createElement("li", {className: "active"}, 
                React.createElement("a", {href: "#"}, "Home")
              ), 
              React.createElement("li", null, 
                React.createElement("a", {href: "#about"}, "About")
              ), 
              React.createElement("li", null, 
                React.createElement("a", {href: "#contact"}, "Contact")
              )
            )
          )
        )
      )
    );
  }});


var ____Class1=React.Component;for(var ____Class1____Key in ____Class1){if(____Class1.hasOwnProperty(____Class1____Key)){JumboToron[____Class1____Key]=____Class1[____Class1____Key];}}var ____SuperProtoOf____Class1=____Class1===null?null:____Class1.prototype;JumboToron.prototype=Object.create(____SuperProtoOf____Class1);JumboToron.prototype.constructor=JumboToron;JumboToron.__superConstructor__=____Class1;function JumboToron(){"use strict";if(____Class1!==null){____Class1.apply(this,arguments);}}
  Object.defineProperty(JumboToron.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
    return(
      React.createElement("div", {className: "jumbotron"}, 
        React.createElement("img", {src: "/assets/logo.png", alt: "logo"})
      )
    );
  }});


var ____Class2=React.Component;for(var ____Class2____Key in ____Class2){if(____Class2.hasOwnProperty(____Class2____Key)){SideBar[____Class2____Key]=____Class2[____Class2____Key];}}var ____SuperProtoOf____Class2=____Class2===null?null:____Class2.prototype;SideBar.prototype=Object.create(____SuperProtoOf____Class2);SideBar.prototype.constructor=SideBar;SideBar.__superConstructor__=____Class2;function SideBar(){"use strict";if(____Class2!==null){____Class2.apply(this,arguments);}}
  Object.defineProperty(SideBar.prototype,"render",{writable:true,configurable:true,value:function(){"use strict";
    return(
      React.createElement("div", {id: "sidebar", className: "col-xs-6 col-sm-3 sidebar-offcanvas"}, 
        React.createElement(Search, {selectTagList: this.props.selectTagList, search: this.props.search.bind(this)})
      )
    );
  }});

