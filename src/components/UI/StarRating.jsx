const StarRating = ({ averageRating }) => {
  const fullStars = Math.floor(averageRating);
  const hasHalfStar = averageRating - fullStars >= 0.5;
  const fullStartsArray = new Array(fullStars).fill(null);
  return (
    <div className="ratings__star">
      {fullStartsArray.map((_, index) => (
        <span key={index}>
          <i className="ri-star-s-fill"></i>
        </span>
      ))}
      {hasHalfStar && (
        <span>
          <i className="ri-star-half-s-line"></i>
        </span>
      )}
    </div>
  );
};

export default StarRating;
