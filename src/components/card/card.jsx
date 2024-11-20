/* eslint-disable react/prop-types */
import "./style.scss";
const Card = ({ data }) => {
  return (
    <div className={"card"}>
      <img
        src={data?.strMealThumb}
        alt=""
        className="card_image"
      />
      <div className="content">
        <h1>{data?.strMeal}</h1>
        <h4>{data?.strCategory}</h4>
        <p>
          {data?.strInstructions
            ? data?.strInstructions
              ?.length > 100
              ? data?.strInstructions?.substring(
                0,
                100
              ) + "..."
              : data?.strInstructions
            : ""}
        </p>
      </div>
    </div>
  );
};

export default Card;
