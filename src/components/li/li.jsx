// ListItem.jsx
const ListItem = ({ id, answer }) => {
    return (
      <li className="variant-wrapper">
        <input required type="radio" name={`variant-${id}`} id={`variant-${id}`} />
        <label htmlFor={`variant-${id}`}>{answer}</label>
      </li>
    );
  };
  
  export default ListItem;  