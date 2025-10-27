import { useContext } from 'react';
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import MovieList from "../Components/MovieList/MovieList";
import Sidebar from "../Components/Sidebar/Sidebar";
import { themeContext } from "../Contexts/Context";


const Page = () => {
    const { darkMood } = useContext(themeContext);
    return (
        <>
            <div className={` h-full w-full ${darkMood ? "dark " : ""}`}>
                <Header />
                <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
                    <Sidebar />
                    <MovieList />
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Page;