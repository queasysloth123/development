
function CategoryCheckbox(props) {
    return (
      <div className="CategoryCheckbox">
        <input type="checkbox" name={props.category} onChange={() => props.onChange(props.category)} checked={props.checked}></input> <label for={props.category}>{props.category}</label>
      </div>
    );
  }
  
  export default CategoryCheckbox;
  