import './Banner.css';
import clockIcon from '../images/ic_watch_later.png';
import locationIcon from '../images/ic_near_me.png';
import phoneIcon from '../images/ic_call.png';

export default function Banner() {
    const bannerItems = [
        { img: clockIcon, text: (
            <>
        <p id='time'>10:00 AM to 7:00 PM</p>
        <p id='workinghour' >WORKING HOURS</p>
        </> 
        ),},
        { img: locationIcon, text: 'Find us here!' },
        { img: phoneIcon, text: 'Contact us now!' }
    ];

    return (
        <div className="banner">
            <h1>Welcome to My Cafe - where flavor and comfort meet!</h1>
            <p>
                My Cafe offers great coffee, delicious food, and a cozy ambiance perfect for any moment!
            </p>
            <ul>
                {bannerItems.map((item, index) => (
                    <li key={index}>
                        <img src={item.img} alt={`icon${index + 1}`} />
                        <p>{item.text}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
