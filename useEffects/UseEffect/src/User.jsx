import { useState ,useEffect} from "react";
import External from "./External";


function User() {
const [cardStyle, setCardStyle] = useState({
    border: "1px solid #ccc",
    width: "200px",
    boxShadow: "1px 2px 3px 0px #cccccc57",
    margin: "10px",
  });

  const [textColor, setTextColor] = useState("black");
  const [grid, setGrid] = useState(true);

  const updateTheme = (bgColor, textColor) => {
    setCardStyle({ ...cardStyle, backgroundColor: bgColor });
    setTextColor(textColor);
};

  const imageStyle = {
    width: "200px",
  };

  const textContainerStyle = {
    padding: "5px",
  };
  return (
    <div>
      <h1 style={{ color: "red" }}>Inline Style in React</h1>
      <div style={{ display: grid ? "flex" : "block", flexWrap: "wrap" }}></div>
      <button onClick={() => setGrid(!grid)}>Toggle Grid</button> 
      <button onClick={()=>updateTheme('#ccc','red')}>Theme</button>            
      <button onClick={()=>updateTheme('white','black')}>Default</button>
        <div style={{ display: "flex",padding:'5px',color:textColor, flexWrap: "wrap" }}>
        <div style={cardStyle}>
          <img style={imageStyle} src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
          <div style={textContainerStyle}>
            <h4>Anil Sidhu</h4>
            <p>Software Developer</p>
          </div>
        </div>
    </div>
      <div style={cardStyle}>
    <img style={imageStyle} src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
    <div style={{padding:'5px' ,color:textColor}}>
      <h4>Anil Sidhu</h4>
      <p>Software Developer</p>
    </div>
  </div>
  
  </div>
 
 

  );
}

export default User;
