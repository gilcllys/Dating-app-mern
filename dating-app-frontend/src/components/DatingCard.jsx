import React, { useEffect } from "react";
import TinderCard from "react-tinder-card";
import styles from "./DatingCard.module.css";

const DatingCards = () => {
  const [people, setPeople] = React.useState([]);

  useEffect(() => {
    async function GetData() {
      const data = await fetch("http://localhost:8001/dating/cards");
      const json = await data.json()
      console.log(json)
      setPeople(json);
    }
    GetData()
  }, []);

  const swipe = (direction, nameToDelete) => {
    console.log("receiving" + nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + "left the screen");
  };

  return (
    <div className={styles.datingCards}>
      <div className={styles.datingCardsContainer}>
        {people.map((person) => (
          <TinderCard
            className={styles.swipe}
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swipe(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.imgUrl})` }}
              className={styles.card}
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default DatingCards;
