import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
<<<<<<< HEAD
import { fetchCards } from "../srEngineer/ReduxToolkit/features/cardsSlice";
=======
import { fetchCards } from "./features/cardsSlice";
>>>>>>> 22156151a3e07dbe38b269715ab7d2b5f7568f5b
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
    onSeeAllClick(showAll); // Pass the current showAll state to the parent component
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>{error}</div>;
  }

  const cardsToShow = showAll ? cards : cards.slice(0, 3);

  return (
    <div className="unique-container mt-3">
      <div className="unique-header">
        <h1>Projects</h1>
        <button className="unique-see-all-btn card" onClick={handleSeeAllClick}>
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
