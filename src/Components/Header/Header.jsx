import { useContext, useState } from 'react';
import logo from '../../../src/assets/logo.svg';
import moon from '../../../src/assets/moon.svg';
import ring from '../../../src/assets/ring.svg';
import cart from '../../../src/assets/shopping-cart.svg';
import sun from '../../assets/sun.svg';
import { movieContext, themeContext } from '../../Contexts/Context';
import CardDetails from '../CardDetails/CardDetails';



const Header = () => {

    const [showCard, setShowCard] = useState(false);
    const { state } = useContext(movieContext);
    const { darkMood, setDarkMood } = useContext(themeContext);


    // console.log(cardData);

    const handleCardShow = () => {
        setShowCard(true);
    }


    return (
        <header>
            {
                showCard && <CardDetails onClose={() => setShowCard(false)} />
            }
            <nav className="container flex items-center justify-between space-x-10 py-6">
                <a href="index.html">
                    <img src={logo} width="139" height="26" alt="logo" />
                </a>

                <ul className="flex items-center space-x-5">
                    <li>
                        <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
                            <img src={ring} width="24" height="24" alt="ring" />
                        </a>
                    </li>
                    <li>
                        <a onClick={() => setDarkMood(darkMood => !darkMood)}
                            className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
                            <img src={darkMood ? sun : moon}
                                width="24"
                                height="24"
                                alt="moon" />
                        </a>
                    </li>
                    <li>
                        <a onClick={handleCardShow} className="  bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
                            <img
                                src={cart}
                                width="24"
                                height="24"
                                alt="card" />
                            {
                                state.cardData.length > 0 && (
                                    <span className=" rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px]">{state.cardData.length
                                    }</span>
                                )
                            }
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;