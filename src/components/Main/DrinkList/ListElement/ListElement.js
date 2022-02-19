import './ListElement.css';

function handleClick(selectDrink, drinkId) {
  selectDrink(drinkId);
}

function ListElement({ drinkId, drinkImg, drinkName, dateModified, selectDrink, selectedElementId }) {
  return (
    <div className={`Drink-list-element${selectedElementId === drinkId ? " active" : ""}`} onClick={() => handleClick(selectDrink, drinkId)}>
      <img src={drinkImg} alt="drink img" />
      <div className="Element-info">
        <div className="Drink-name">{drinkName}</div>
        <div className="Date-modified">{dateModified}</div>
      </div>
    </div>
  );
}

export default ListElement;
