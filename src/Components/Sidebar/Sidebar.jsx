import commingSoon from '../../../src/assets/commingSoon.svg'
import favourite from '../../../src/assets/favourite.svg'
import newRelease from '../../../src/assets/newRelease.svg'
import trending from '../../../src/assets/trending.svg'
import watchLater from '../../../src/assets/watchLater.svg'





const Sidebar = () => {
    return (
        <div>
            <aside>
                <ul className="space-y-2">
                    <li>
                        <a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black" href="#">
                            <img src={trending} width="24" height="24" alt="" />
                            <span>Trending</span>
                        </a>
                    </li>
                    <li>
                        <a className="flex items-center  space-x-2 px-5 py-3.5 rounded-lg" href="#">
                            <img src={newRelease} width="24" height="24" alt="" />
                            <p>New releases</p>
                        </a>
                    </li>
                    <li>
                        <a className="flex items-center    space-x-2 px-5 py-3.5 rounded-lg" href="#">
                            <img src={commingSoon} width="24" height="24" alt="" />
                            <span>Coming Soon</span>
                        </a>
                    </li>
                    <li>
                        <a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
                            <img src={favourite} width="24" height="24" alt="" />
                            <span>Favourites</span>
                        </a>
                    </li>
                    <li>
                        <a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
                            <img src={watchLater} width="24" height="24" alt="" />
                            <span>Watch Later</span>
                        </a>
                    </li>
                </ul>
            </aside>
        </div>
    );
};

export default Sidebar;