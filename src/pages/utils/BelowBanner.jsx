import React, { useEffect, useRef } from 'react';
import './BelowBanner.css';

const BelowBanner = () => {
    const libraryRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (event) => {
            const libraryItems = libraryRef.current.querySelectorAll('.library-item img');
            libraryItems.forEach((item) => {
                const rect = item.getBoundingClientRect();
                const x = event.clientX - rect.left;
                const y = event.clientY - rect.top;

                item.style.transform = `perspective(1000px) rotateY(${(x - rect.width / 2) / 20}deg) rotateX(${-(y - rect.height / 2) / 20}deg) scale(1.1)`;
            });
        };

        const handleMouseLeave = () => {
            const libraryItems = libraryRef.current.querySelectorAll('.library-item img');
            libraryItems.forEach((item) => {
                item.style.transform = 'perspective(1000px) rotateY(0) rotateX(0) scale(1)';
            });
        };

        const librarySection = libraryRef.current;
        librarySection.addEventListener('mousemove', handleMouseMove);
        librarySection.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            librarySection.removeEventListener('mousemove', handleMouseMove);
            librarySection.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div className='belowbanner1'>
            <div className='additional'></div>
            <div className="tab intro">
                <h1 className="animation-show">AVAHAN</h1>
                <p className="animation-show">
                    The RAJBHASHA club at NIT Raipur celebrates Hindi language and culture through its main event, Aavahan.
                    This event features activities like Kavita Lekhan, Nukkad Natak, Tatkalin Bhasa, Samuh Charcha, and Kavita Pathan.
                    These activities promote Hindi literature and encourage students to engage creatively and intellectually.
                    The club plays a vital role in preserving and fostering appreciation for Hindi among the youth.
                </p>
                <button className="animation-show">Registration</button>
            </div>

            <div className="tab library" ref={libraryRef}>
                <div className="library-item animation-show">
                    <h2>Event1</h2>
                    <img src="../public/img/9.jpg" alt="Image Name" />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates incidunt enim, excepturi reiciendis delectus dolore fuga earum similique molestiae. Numquam!</p>
                </div>
                <div className="library-item animation-show">
                    <h2>Event1</h2>
                    <img src="../public/img/10.jpg" alt="Image Name" />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates incidunt enim, excepturi reiciendis delectus dolore fuga earum similique molestiae. Numquam!</p>
                </div>
                <div className="library-item animation-show">
                    <h2>Event1</h2>
                    <img src="../public/img/11.jpg" alt="Image Name" />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates incidunt enim, excepturi reiciendis delectus dolore fuga earum similique molestiae. Numquam!</p>
                </div>
                <div className="library-item animation-show">
                    <h2>Event1</h2>
                    <img src="../public/img/12.jpg" alt="Image Name" />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates incidunt enim, excepturi reiciendis delectus dolore fuga earum similique molestiae. Numquam!</p>
                </div>
            </div>
        </div>
    );
};

export default React.memo(BelowBanner);
