// CardsList.jsx
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCards } from "./features/cardsSlice";
import { Link } from "react-router-dom";
import "./cardlist.css";

const CardsList = ({ onCardClick, onSeeAllClick }) => {
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
    onSeeAllClick();
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>{error}</div>;
  }

  const cardsToShow = showAll ? cards : cards.slice(0, 2);

  return (
    <div className="custom-container mt-3">
      <div className="custom-header">
        <h1>Projects</h1>
        <button className="custom-see-all-btn" onClick={handleSeeAllClick}>
          See All
        </button>
      </div>
      <div className="custom-card-container">
        {cardsToShow.map((card, index) => (
          <div
            className="custom-card"
            key={index}
            onClick={() => onCardClick(card)}
          >
            <img src={card.photo} alt={card.title} />
            <h2>{card.heading}</h2>
            <p>{card.text}</p>
            <Link to={`/card/${index}`}>
              <button className="custom-view-all-btn">View All</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsList;