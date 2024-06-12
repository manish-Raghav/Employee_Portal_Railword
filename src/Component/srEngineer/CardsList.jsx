import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCards } from "./ReduxToolkit/features/cardsSlice";
import { Link } from "react-router-dom";
import './cardlist.css';

const CardsList = ({ onSeeAllClick }) => {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.cards.cards);
  const status = useSelector((state) => state.cards.status);
  const error = useSelector((state) => state.cards.error);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCards());
    }
  }, [status, dispatch]);

  const handleSeeAllClick = () => {
    setShowAll(!showAll);
    onSeeAllClick(); // Pass the click event to the parent component
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>{error}</div>;
  }

  const cardsToShow = showAll ? cards : cards.slice(0, 2);

  return (
    <div className="unique-container mt-3">
      <div className="unique-header">
        <h1>Projects</h1>
        <button className="unique-see-all-btn" onClick={handleSeeAllClick}>
          {showAll ? "See Less" : "See All"}
        </button>
      </div>
      <div className="unique-card-container">
        {cardsToShow.map((card, index) => (
          <div className="unique-card" key={index}>
            <img src={card.photo} alt={card.title} />
            <h2>{card.heading}</h2>
            <p>{card.text}</p>
            <Link to={`/card/${index}`}>
              <button className="unique-view-all-btn">View All</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsList;
