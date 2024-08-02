
import React, { useEffect } from 'react';
import './parallax.css';

const Parallax = () => {
    useEffect(() => {
        const handleScroll = () => {
            const top = window.scrollY;
            const listBg = document.querySelectorAll('.bg');
            const titleBanner = document.querySelector('.banner h1');
            const listTab = document.querySelectorAll('.tab');

            listBg.forEach((bg, index) => {
                if (index !== 0 && index !== 8) {
                    bg.style.transform = `translateY(${(top * index / 2)}px)`;
                } else if (index === 0) {
                    bg.style.transform = `translateY(${(top / 3)}px)`;
                }
            });

            if (titleBanner) {
                titleBanner.style.transform = `translateY(${(top * 4 / 2)}px)`;
            }

            listTab.forEach(tab => {
                if (tab.offsetTop - top < 550) {
                    tab.classList.add('active');
                } else {
                    tab.classList.remove('active');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <div className="banner">
                <div className="bg bg-1"></div>
                <div className="bg bg-2"></div>
                <div className="bg bg-3"></div>
                <div className="bg bg-4"></div>
                <div className="bg bg-5"></div>
                <div className="bg bg-6"></div>
                <div className="bg bg-7"></div>
                <div className="bg bg-8"></div>
                <div className="bg bg-9"></div>
                <h1>Aavahan</h1>
            </div>

            <div className="tab intro">
                <h2 className="animation-show">Rajbhasha</h2>
                <img src="../public/rajbhashalogo.jpeg" alt="Logo" className="animation-show" />
                <p className="animation-show">
                    The RAJBHASHA club at NIT Raipur celebrates Hindi language and culture through its main event, Aavahan.
                    This event features activities like Kavita Lekhan, Nukkad Natak, Tatkalin Bhasa, Samuh Charcha, and Kavita Pathan.
                    These activities promote Hindi literature and encourage students to engage creatively and intellectually.
                    The club plays a vital role in preserving and fostering appreciation for Hindi among the youth.
                </p>
                <button className="animation-show">Enroll in Aavahan</button>
            </div>

            <div className="tab library">
                <div className="animation-show">
                    <img src="../public/img/9.jpg" alt="Image Name" />
                    <p>Image Name</p>
                </div>
                <div className="animation-show">
                    <img src="../public/img/10.jpg" alt="Image Name" />
                    <p>Image Name</p>
                </div>
                <div className="animation-show">
                    <img src="../public/img/11.jpg" alt="Image Name" />
                    <p>Image Name</p>
                </div>
                <div className="animation-show">
                    <img src="../public/img/12.jpg" alt="Image Name" />
                    <p>Image Name</p>
                </div>
            </div>
        </div>
    );
};

export default Parallax;
