import React, { useEffect, useState } from "react";
import { Detail } from "../interface";

interface Props {
  abilities:
    | {
        name: string;
        ability: string;
      }[]
    | undefined;
  name: string;
  id: number;
  image: string;
  viewDetial: Detail;
  setViewDetial: React.Dispatch<React.SetStateAction<Detail>>;
}

const PokemonList: React.FC<Props> = (props) => {
  const { name, image, abilities, viewDetial, setViewDetial, id } = props;
  const [isSelected, setIsSelected] = useState(false);
  useEffect(() => {
    setIsSelected(id === viewDetial?.id);
  }, [viewDetial]);

  const closeDetail = () => {
    setViewDetial({
      id: 0,
      isOpened: false,
    });
  };

  return (
    <div>
      {isSelected ? (
        <section className="pokemon-list-detailed">
          <div className="detail-container">
            <p className="detail-close" onClick={closeDetail}>
              X
            </p>
            <div className="detail-info">
              <img src={image} alt={image} className="detail-img" />
              <div className="detail-name">{name}</div>
            </div>
            <div className="detail-skill">
              <p className="detail-ability">Abilities: </p>
              {abilities?.map((ab: any, index: number) => (
                <div>{ab.ability.name}</div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="pokemon-list-container">
          <p className="pokemon-name">{name}</p>
          <img src={image} alt={image} />
        </section>
      )}
    </div>
  );
};

export default PokemonList;
