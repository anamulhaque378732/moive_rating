import star from '../../assets/star.svg';

const CineRating = ({ value }) => {

    const stars = Array(value).fill(star);

    return (
        <>
            {
                stars.map((star, index) => (
                    <img width="14" height="14" alt=""
                        key={index}
                        src={star}
                    />
                ))
            }

        </>

    );
};

export default CineRating;