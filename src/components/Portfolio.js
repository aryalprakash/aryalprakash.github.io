
import React, { Component } from 'react';
import  { Link } from 'react-router';

let style={
    header: {
        background: 'grey'
    },
    slider:{
        'position': 'relative',
        'top': '90px',
        padding: '0px 50px 20px 50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        background: "url('../../img/infinia/back1.png')",
        backgroundSize: 'cover'
    },
    tag:{
        width: '1050px'
    },
    icat:{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-end'
    },
    category:{
        border: '0px',
        height: '225px',
        width: '225px',
        margin: '10px'
    }
}

let works = [{
    title: "Viveka Health",
    subtitle: "October 2016 - Present",
    details: "Responsible for design and development of Viveka Health mobile app and assisting in development of web app."
},
{
    title: "Infinia Hub",
    subtitle: "June 2016 - Present",
    details: "Responsible for supervision, design and development of Infinia projects."
},
{
    title: "nLocate",
    subtitle: "October 2014 - October 2016",
    details: "Responsible for design and development of different web and cross-platform mobile applications."
},
{
    title: "Verisk IT",
    subtitle: "March 2014 - September 2014",
    details: "Worked as an Intern."
}
];

let projects = [{
    title: "Viveka Health",
    subtitle: "Mobile",
    details1: "Android and iOS mobile app for Viveka Health Members.",
    details2: "Technologies used: Ionic/Cordova, AngularJS",
    links: ["https://play.google.com/store/apps/details?id=com.vivekahealth.vivekahealth", "https://itunes.apple.com/us/app/viveka-health/id1209935105?ls=1&mt=8"]
},
{
    title: "nLocate",
    subtitle: "Web and Mobile",
    details1: "A local business search engine for Nepal.",
    details2: "Technologies used: Ionic/Cordova, AngularJS",
    links: ["https://play.google.com/store/apps/details?id=com.nepways.nlocate", "https://nlocate.com"]
},
{
    title: "OMG Youtube",
    subtitle: "Web",
    details1: "Web app to watch and download Youtube Videos",
    details2: "Technologies used: React.js, Redux, youtube-dl, Youtube API",
    links: ["https://omgyoutube.com"]
}]

export default class Portfolio extends Component{
    constructor(){
        super();
        this.state={
            list: false,
            place: 'Dubai',
            class: ''
        }
        this.show = this.show.bind(this)
        this.hide = this.hide.bind(this)
        this.change = this.change.bind(this)
    }

    componentDidMount(){
        window.addEventListener('scroll', function(e){
            let distanceY = window.pageYOffset || document.documentElement.scrollTop,
                shrinkOn = 10,
                header = document.querySelector("iheader");
            if (distanceY > shrinkOn) {
                this.setState({
                    class: 'smaller'
                })
            } else {
                this.setState({
                    class: ''
                })
            }
        }.bind(this));
    }

    show(){
        this.setState({
            list: true
        })
    }
    hide(){
        this.setState({
            list: false
        })
    }

    change(place){
        this.setState({
            place
        })
        this.hide()
    }


    render(){
        return(<div className="container">
            <div className="header">
                <div className="profile">
                    <div className="thumbnail">
                        <img className="image" src="https://avatars3.githubusercontent.com/u/3658290?s=460&v=4" />
                    </div>
                    <div className="info">
                        <div className="name">
                            Prakash Aryal
                        </div>
                        <div className="designation">
                            Frontend Developer
                        </div>
                        <div className="location">
                            Kathmandu, Nepal
                        </div>    
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="section">
                    <div className="title">
                        Technical Skills
                    </div>
                    <div className="section-content">
                        React.js, Redux, Angular JS, Ionic/Cordova, Node.js, Wordpress, HTML5, CSS3, REST API
                    </div>
                </div>

                <div className="section">
                    <div className="title">
                        Work Experience
                    </div>
                    {works.map(work=>
                    <div className="list">
                        <div className="title">
                            {work.title}
                        </div>
                        <div className="subtitle">
                            {work.subtitle}
                        </div>
                        <div className="details">
                            {work.details}
                        </div>
                    </div>
                    )}
                </div>

                <div className="section">
                    <div className="title">
                        Projects
                    </div>
                    {projects.map(project=>
                    <div className="list">
                        <div className="title">
                            {project.title}
                        </div>
                        <div className="subtitle">
                            {project.subtitle}
                        </div>
                        <div className="details">
                            {project.details1}
                        </div>
                        <div className="details">
                            {project.details2}
                        </div>
                        <div className="links">
                            {project.links.map(link=>
                            <a href={link} key={link} className="link">{link}</a>)}
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </div>)
    }
}