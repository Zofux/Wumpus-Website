import React, { useState } from 'react'
import "./style.css";
import "./footer.css";
import banner from '../png/0be63c1a-e2fd-46a7-915f-e2517fbb11a0_WumpusBackground.png';
import logo from '../png/b17d025faa92614dc539185498f10277.png'
import { Link } from 'react-router-dom'

/*
 <Typical
                    loop={Infinity}
                    wrapper="b"
                    steps={[
                        'Join Wumpus Land!',
                        2000,
                        'Many Great Giveaways',
                        2000,
                        'Active community',
                        2000,
                        'A Nice Staff Team',
                        2000
                    ]}
                />
*/

function openWindowDiscord() {
    window.open("https://discord.gg/xqaAmeWzCe", "_blank")
}

function openWindowDonate() {
    window.open("https://donate.wumpus.land/", "_blank")
}

function openWindowSimplify() {
    window.open("https://discord.gg/PaGJGzbzw6", "_blank")
}

export function HomePage(props) {
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

            <h1 className="header">    
               Wumpus Land
            </h1>
            <p className="under-header">Join our server and make some friends, we have over 1000+ members waiting for you</p>

            <img src={banner} className="banner" />
            <div className="banner-overlap"></div>

            <div className="mid-section">
                <h1>Join Wumpus Land Today!</h1>
                <p>Join over 1000+ members and have some fun, we have lots of cool stuff, like a custom bot. So what are you waiting for?</p>
                <div className="buttons">
                    <button className="join-btn" onClick={openWindowDiscord}>Join Now</button>
                    <Link to="/info"><button className="info-btn">Server Info</button></Link>
                </div>
            </div>

            <div className="footer-container">
                <footer>
                    <div className="container">
                        <div className="about">
                            <h2>About</h2>
                            <p>
                                Wumpus land is a big community for you and your friends,
                                we have have a lot of giveaways with all sorts of prices.
                                Want to read more? Head over to <Link to="/info">Server Info</Link> and take a look
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