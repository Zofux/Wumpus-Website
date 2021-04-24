import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../png/b17d025faa92614dc539185498f10277.png'
import './style.css'

function openWindowDiscord() {
    window.open("https://discord.gg/xqaAmeWzCe", "_blank")
}

function openWindowDonate() {
    window.open("https://donate.wumpus.land/", "_blank")
}

function openWindowSimplify() {
    window.open("https://discord.gg/PaGJGzbzw6", "_blank")
}

export function InfoPage(props) {
    const [open, setOpen] = useState(false)

    const navSlide = () => {
        const burger = document.querySelector('.burger');
        burger.classList.toggle('toggle')

        if (open) {
            setOpen(false)
        } else if (!open) {
            setOpen(true)
        }
    }

    return (
        <body>
            <nav>
                <div className={
                    "nav-bar " + (open ? 'open' : '')
                }>
                    <img src={logo} alt="" className="logo" onClick={openWindowDiscord} />
                    <ul className="navLinks">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/info">Server Info</Link></li>
                        <li><a onClick={openWindowDonate}>Donate</a></li>
                        <li><a onClick={openWindowDiscord}>Discord</a></li>

                    </ul>
                    <div className="burger" onClick={navSlide}>
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                </div>
            </nav>

            <div className="info-container">
                <div className="info-header">
                    <h1>Server Information Page</h1>
                    <p>
                        On this page you will find all sorts of useful information that you should know about the server.
                        This includes our rules, and booster perks. If you have any questions then
                    feel free to join our <a onClick={openWindowDiscord}>Discord</a> and we will be happy to help you
                </p>
                </div>
            </div>

            <div className="rules-container">
                <div className="rules">
                    <div className="rule">
                        <p>
                            #1 You should not try to swear in our text or voice channels, we like would like that our server is welcoming for users of all ages.
                            You should also not try to bypass our filters. 
                        </p>
                    </div>
                    <div className="rule">
                        <p>
                            #2 Exernal Links are not allowed in our server, this is to protect our users from links that could 
                            hurt their hardware. This rule does not go for server invites in seløf advertising channels 
                        </p>
                    </div>
                    <div className="rule">
                        <p>
                            #3 All advertising in our users dm's are not allowed, you are also not allowed to advertise in any other channel then our adervtising channels. 
                        </p>
                    </div>
                    <div className="rule">
                        <p>
                            #4 All bot commands should be kept in the bot commands channel, this is to keep our channels clean for bot commands.
                        </p>
                    </div>
                    <div className="rule">
                        #5 While hosting a giveaway you are required to hand over the prize, if you fail to give out the prize you will resive a ban.
                    </div>
                </div>
            </div>

            <div className="perks-container">
                <div className="perks">
                    <p className="perk">#1 If you boost our server you will resive the @Booster Role</p>
                    <p className="perk">#2 You will get a exclusive advertising channel</p>
                    <p className="perk">#3 Your server will get a shoutOut (The server must be NSFW)</p>
                    <p className="perk">#4 You will get our server as a partner</p>
                    <p className="perk">#5 Get a warn thanks from our staff team</p>
                </div>
            </div>

            <div className="footer-container">
                <footer>
                    <div className="container">
                        <div className="about">
                            <h2>About</h2>
                            <p>
                                This is our about server info page, here you will find useful info about the server.
                                If you have any questions then feel free to join the server and we will be happy to help.
                                Have you seen the home page? Head over to the <Link to="/">Home Page</Link> and take a look
                                </p>
                            <br />
                            <p>© Wumpus Land | Made with ❤️ by <a onClick={openWindowSimplify}>Zofux</a></p>
                        </div>
                        <ul className="icons">
                            <li><a onClick={() => window.open("https://discord.gg/XveJX7Z", "_blank")}><i class="fab fa-discord"></i></a></li>
                            <li><a onClick={() => window.open("https://github.com/Simplify-Development", "_blank")}><i class="fab fa-github"></i></a></li>
                        </ul>
                    </div>

                    <div className="links">
                        <div className="product">
                            <h2>Product</h2>
                            <ul>
                                <li><a onClick={openWindowDiscord}>Discord</a></li>
                                <Link to="/info"><li><a >Info</a></li></Link>

                            </ul>
                        </div>
                        <div className="reacources">
                            <h2>Resources</h2>
                            <ul>
                                <li><a onClick={openWindowDonate}>Donate</a></li>
                                <li><a onClick={openWindowSimplify}>Created by</a></li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </div>
        </body>
    )
}