
import style from './Review.module.css'
const Review = ({reviews}) => {
    
    return (
            <ul className={style.list}>
                {reviews.map(review=> 
                <li className={style.list} key={review.id}>
                    <h3>{review.author}</h3>
                     <p>{review.content}</p>
                </li>)}
            </ul>

    );
};



export default Review;