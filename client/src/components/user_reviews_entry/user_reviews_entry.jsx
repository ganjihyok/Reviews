import style from './user_reviews_entry.css';

const React = require('react');

const UserReviewsEntry = (props) => {
  const dateConvert = (date) => {
    const result = date.split(' ');
    return `${result[2]} ${result[4]}`;
  };
  return (
    <div className={style.reviews}>
      <div className={style.picture} />
      <div className={style.name}>
        {props.review.name}
      </div>
      <div className={style.date}>
        {dateConvert(props.review.date)}
      </div>
      <p>
        {props.review.comment}
      </p>
    </div>
  );
};

export default UserReviewsEntry;