// const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const allItem = items.map((item) => item * 2);
// console.log(allItem);

// const names = ["jason", "llanes", "jason", "llanes", "jason", "llanes"];
// const allNames = names.map((name) => {
//   return <h3>{name[0].toUpperCase() + name.slice(1)}</h3>;
// });
// console.log(allNames);

export default function Card(props) {
  console.log(props);
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "Sold Out";
  } else if (props.location === "Online") {
    badgeText = "Online";
  }

  return (
    <div className="card-layout">
      {badgeText && <span className="card-badge">{badgeText}</span>}
      <img src={props.image} alt="random" className="card-image" />
      <div className="card-details">
        <img
          src="../public/assets/star.png"
          alt="random"
          className="card-star"
        />
        <span>{props.stats.rating}"</span>
        <span className="card-title-sub">
          {" "}
          ({props.stats.reviewCount}) • {props.location}
        </span>
      </div>
      <span className="">{props.itemtitle}</span>
      <span className="">
        <b>From ${props.price}</b> / person
      </span>
    </div>
  );
}
