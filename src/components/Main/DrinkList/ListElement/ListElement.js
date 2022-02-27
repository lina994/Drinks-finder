import './ListElement.css';

function handleClick(selectDrink, drinkId, setIsOpen) {
  setIsOpen(false);
  selectDrink(drinkId);
}

function ListElement({ drinkId, drinkImg, drinkName, dateModified, selectDrink, selectedElementId, setIsOpen }) {
  return (
    <div className={`Drink-list-element${selectedElementId === drinkId ? " active" : ""}`} onClick={() => handleClick(selectDrink, drinkId, setIsOpen)}>
      <img src={drinkImg} alt="drink img" />
      <div className="Element-info">
        <div className="Drink-name">{drinkName}</div>
        <div className="Date-modified">{dateModified}</div>
      </div>
    </div>
  );
}

export default ListElement;
