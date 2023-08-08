import React from 'react';
import './style.css';
import personImage from './img/person.png';
import mountain1Image from './img/mountain1.png';
import mountain2Image from './img/mountain2.png';
import mountain3Image from './img/mountain3.png';
import skyImage from './img/sky.png';
import aboutImage from './img/image.jpg';
const ParallaxScrollingEffect = () => {
    return (
        <div>
            <header>
            <nav>
            <div class="container">
                <h3 class="logo">A<span>W</span></h3>
                <div class="hamburger-menu">
                    <div class="bar"></div>
                </div>
            </div>
            </nav>
                <h1 class="big-title translate" data-speed="0.1">Around the World</h1>
                <img src={personImage} className="person translate" data-speed="-0.25" alt="" />
                <img src={mountain1Image} className="mountain1 translate" data-speed="-0.2" alt="" />
                <img src={mountain2Image} className="mountain2 translate" data-speed="0.4" alt="" />
                <img src={mountain3Image} className="mountain3 translate" data-speed="0.3" alt="" />
                <img src={skyImage} className="sky translate" data-speed="0.5" alt="" />
            </header>

            <section>
                <div className='shadow'></div>
                <div className='container'>
                    <div className="content opacity">
                        <h3 className="title">
                            About
                            <div className="border"></div>
                        </h3>
                        <p className="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque officiis quos expedita ipsa, a quidem inventore voluptates debitis accusamus tenetur qui et voluptas dicta, culpa earum, doloribus odio consectetur consequuntur soluta quasi nobis! Deserunt voluptatum reiciendis iure expedita sequi quisquam laboriosam temporibus exercitationem.</p>
                    </div>
                <div className="imgContainer opacity">
                    <img src={aboutImage} alt="" />
                </div>
                </div>
            </section>
        </div>
    );
}

export default ParallaxScrollingEffect;
