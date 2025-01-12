import './Banner.css';
import clockIcon from '../images/ic_watch_later.png'
import locationIcon from '../images/ic_near_me.png'
import phoneIcon from '../images/Gray 85.png'

export default function Banner (){

    return (
        <div className='Banner'>
            <h1>Welcome to My Cafe – where flavor and comfort meet!</h1>
            <p>"My Cafe offers great coffee, delicious food, and a cozy ambiance perfect for any moment!" </p>
            <ul>
                <li>
                    <img src={clockIcon}/>
                    <p>Open 24/7</p>
                </li>
                <li>
                <img src={locationIcon}/>
                <p>Open 24/7</p>
                </li>
                <li>
                <img src={phoneIcon}/>
                <p>Open 24/7</p>
                </li>
            </ul>
        </div>
    );
}