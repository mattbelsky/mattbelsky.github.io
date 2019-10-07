import React from 'react';
import githubLogo from "./res/github-logo.png";
import codepenLogo from "./res/codepen-logo.png";

const title = "MB's Portfolio Site";
const projects = [
  {
    name: "EV Route Planner",
    summary: "A RESTful API that assembles a list of electric vehicle charging sites within a specified distance from a route created from a starting and ending coordinate pair or near the user’s geolocation. Additionally, the user can search for charging sites by country (ISO country code), by latitude and longitude, and near the user's location. Queries the OpenChargeMaps API for site information, the Google Directions API to create the route, and the Google Geolocation API to determine current location.",
    image: "",
    github: "https://github.com/mattbelsky/EVRoutePlanner",
    codepen: "",
    stack: [
      "Java",
      "Spring",
      "MyBatis",
      "Maven"
    ]
  },
  {
    name: "Komodo Crypto",
    summary: "An automated cryptocurrency trading application that makes trades when a profitable arbitrage opportunity is detected between exchanges. Komodo employs Knowm's excellent XChange library to interact with the exchanges, retrieving ticker data and user account information, as well as executing trades.",
    image: "",
    github: "https://github.com/mattbelsky/KomodoCrypto",
    codepen: "",
    stack: [
      "Java",
      "Spring",
      "MyBatis",
      "Maven",
      "MySQL",
      "JWT",
      "AWS RDS"
    ]
  },
  {
    name: "EVGo!",
    summary: "Android app that provides a front end for EV Route Planner REST API. User picks a starting & ending address, for which the app shows the best route on a Google Map along with charging sites along it, and sends user to navigation if desired.",
    image: "",
    github: "https://github.com/mattbelsky/EVGo",
    codepen: "",
    stack: [
      "Java",
      "Android framework",
      "Gradle"
    ]
  },
  {
    name: "Tic Tac Toe",
    summary: "A simple Android tic-tac-toe game",
    image: "",
    github: "https://github.com/mattbelsky/TicTacToe",
    codepen: "",
    stack: [
      "Java",
      "Android framework",
      "Gradle"
    ]
  },
  {
    name: "Cryptocurrency Price Sentiments",
    summary: "A RESTful API that determines whether the tone of recent news stories affects cryptocurrency prices. Uses MySQL stored procedures to minimize the number of database queries.",
    image: "",
    github: "https://github.com/mattbelsky/CryptocurrencyPriceSentiments",
    codepen: "",
    stack: [
      "Java",
      "Spring",
      "MyBatis",
      "Maven",
      "MySQL"
    ]
  },
  {
    name: "Drum Machine",
    summary: "A simple fun web app that lets the user bang out some phat beatz to destress",
    image: "",
    github: "",
    codepen: "https://codepen.io/mattbelsky/pen/bGbBGKa",
    stack: [
      "Javascript",
      "React.js",
      "HTML",
      "CSS"
    ]
  },
  {
    name: "Github Markdown Previewer",
    summary: "Provides a live preview for Github markdown",
    image: "",
    github: "",
    codepen: "https://codepen.io/mattbelsky/pen/ExYVyeb",
    stack: [
      "Javascript",
      "React.js",
      "HTML",
      "CSS"
    ]
  },
  {
    name: "Random Quote Machine",
    summary: "Shows random inspirational quotes whenever the user's heart desires",
    image: "",
    github: "https://github.com/mattbelsky/React-FCC/tree/master/random-quote-generator/src",
    codepen: "https://codepen.io/mattbelsky/pen/rNBaKEj",
    stack: [
      "Javascript",
      "React.js",
      "HTML",
      "CSS"
    ]
  }
];
const technologies = [
  {
    category: "Core Languages",
    list: [
      "Java",
      "Javascript",
      "HTML",
      "CSS"
    ]
  },
  {
    category: "Frameworks",
    list: [
      "Spring (Boot with MVC, Security)",
      "MyBatis",
      "Hibernate",
      "Android",
      "React.js"
    ]
  },
  {
    category: "Databases",
    list: [
      "MySQL",
      "MongoDB",
      "AWS RDS"
    ]
  },
  {
    category: "Infrastructure",
    list: [
      "AWS EC2",
      "AWS S3",
      "Apache Tomcat"
    ]
  },
  {
    category: "Build Tools",
    list: [
      "Maven",
      "Gradle"
    ]
  },
  {
    category: "Project Management",
    list: [
      "Jira",
      "Agile developemnt"
    ]
  },
  {
    category: "Version Control",
    list: [
      "Git",
      "Github"
    ]
  },
  {
    category: "Testing Frameworks and Libraries",
    list: [
      "JUnit",
      "Espresso"
    ]
  },
  {
    category: "Additional Tools and Skills",
    list: [
      "Linux",
      "Postman",
      "Curl",
      "Apache Kafka",
      "Excel VBA"
    ]
  }
];

const menuItems = ["About", "Portfolio", "Blog", "Contact"];
const Menu = (props) => {
  const items = menuItems.map(item => 
    <span class="menu-item" onClick={() => props.onClick(item)}>
      {item}
    </span>
  );
  return <div id="menu-container">{items}</div>;
};

const About = () => {
  const tech = technologies.map(t => {
    const list = t.list.map(l => l != t.list[t.list.length - 1] ? l.toLowerCase() + " | " : l.toLowerCase());
    return (
      <div style={{marginBottom: "40px"}}>
        <h3>{t.category}</h3>
        <span class="summary">{list}</span>
      </div>
    );
  });
  return (
    <div>
      <div id="about-top" class="project">
        <h2>Let me introduce myself...</h2>
        <p>I'm a junior developer looking for that golden first job in the tech industry.</p>
        <p>I've got experience in front and back end stacks, building, debugging, documenting, and deploying multiple <b>Java Spring REST</b> & <b>MVC</b>, <b>Android</b>, and <b>React.js</b> applications. Additionally, I have experience with statistics and regression analysis as well as Excel/VBA scripting, if needed.</p>
        <p>Take a look at my portfolio, Github, and Codepen projects, and see if I can be an asset to your team!</p>
      </div>
      <div id="about-bottom" class="project">
        <h2>This is the tech I've used...</h2>
        <p />
        {tech}
      </div>
    </div>
  );
};

const Portfolio = () => {
  const pjs = projects.map(project =>
    <Project 
      name={project.name} 
      summary={project.summary}
      image={project.image} 
      github={project.github} 
      codepen={project.codepen} 
      stack={project.stack} />
  );
  return (
    <div>
      {pjs}
      <p class="summary">...and this site, written by me from scratch with React.js. Check out the source code @ <a class="blue-link" href="https://codepen.io/mattbelsky/pen/gOYNXpd" target="_blank">Codepen</a>.</p>
    </div>
  );
};

const Blog = () => <div><p>Blog coming soon...</p></div>;

const Contact = () => {
  const email = "matt.belsky@gmail.com";
  return (
    <div style={{textAlign: "center"}}>
      <p><a class="blue-link" href={"mailto:" + email}>{email}</a></p>
    </div>
  );
};

const ContentContainer = (props) => {
  var page = "";
  switch(props.page) {
    case "Portfolio":
      page = <Portfolio />;
      break;
    case "Blog":
      page = <Blog />;
      break;
    case "Contact":
      page = <Contact />;
      break;
    default:
      page = <About />;
  }
  return <div id="content">{page}</div>;
};

const Project = (props) => {
  const stack = props.stack.map(tech => 
    props.stack[props.stack.length - 1] != tech ? tech.toLowerCase() + " | " : tech.toLowerCase());
  
  var githubCodepen = [];
  // The order here determines the order the links are displayed.
  if (props.github != "") githubCodepen.push("github");
  if (props.codepen != "") githubCodepen.push("codepen");
  
  const links = githubCodepen.map(site => {
    return (
      <a href={props[site]} target="_blank">
        <img src={site == "github" ? githubLogo : codepenLogo} alt={site + " logo"} />
      </a>
    );
  });
  
  return (
    <div class="project">
      <h2>{props.name}</h2>
      <span class="summary">{stack}</span>
      <div class="divider-content"></div>
      <p class="summary">{props.summary}</p>
      <div>{links}</div>
    </div>
  );
};

class Root extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {page: "About"};
    this.handleClick = this.handleClick.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }
  
  componentWillMount() {
    document.title = title;
    window.addEventListener("scroll", this.handleScroll);
  }
  
  // Used to place content in positions based on other dynamically rendered content.
  componentDidMount() {
    // Places the main content below the header as the header is in a fixed position.
    var headerHeight = window.getComputedStyle(document.getElementById("header"), null)
      .getPropertyValue("height");
    document.getElementById("content").style.marginTop = headerHeight;
    
    // // Places "about-bottom" either just below the visible window or below "about-top", depending on which
    // // is greater.
    // var aboutTopHeight = window.getComputedStyle(document.getElementById("about-top"), null)
    //   .getPropertyValue("height").match(/[0-9]+/).join("");
    // headerHeight = headerHeight.match(/[0-9]+/).join("");
    // var heightAboveContent = parseInt(headerHeight) + parseInt(aboutTopHeight);
    // var windowHeight = window.innerHeight;
    // document.getElementById("about-top").style.marginBottom = 
    //   parseInt(windowHeight) > heightAboveContent ? windowHeight + "px" : heightAboveContent + "px";
  }
  
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  
  handleClick(e) {
    this.setState({page: e});
  }
  
  // Shrinks the navigation menu on scroll.
  handleScroll(e) {
    const nameStyle = window.getComputedStyle(document.getElementById("name"), null);
    const nameHeight = nameStyle.getPropertyValue("height").match(/[0-9]+/).join("");
    const nameMarginTop = nameStyle.getPropertyValue("margin-top").match(/[0-9]+/).join("");
    const nameMarginBottom = nameStyle.getPropertyValue("margin-bottom").match(/[0-9]+/).join("");
    const nameTotalHeight = parseInt(nameHeight) + parseInt(nameMarginTop) + parseInt(nameMarginBottom);
    const headerStyle = document.getElementById("header").style;

    if (window.scrollY > 80) {
      headerStyle.top = "-" + nameTotalHeight.toString() + "px";
      headerStyle.boxShadow = "0px 1px 3px grey";
    } else if (window.scrollY <= 80) {
      headerStyle.top = "0%";
      headerStyle.boxShadow = "none";
    }
  }
  
  render() {
    return (
      <div>
        {/* Pass handleClick by reference like this. Otherwise, it will be called every time 
            the component renders. */}
        <div id="header">
          <h1 id="name">Matthew Belsky</h1>
          <Menu onClick={this.handleClick}/> 
          <div id="divider-menu"></div>
        </div>
        <ContentContainer page={this.state.page} />
      </div>
    );
  }
}

export default Root;
