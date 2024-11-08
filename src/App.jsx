import { useState } from "react";
import Button from "./Button";

function App() {
  const [colorSet, setColor] = useState('red'); // Initial background color

  const bgColorArray = [
    'red', 'yellow', 'black', 'indigo', 'white', 'green', 'blue', 'purple', 'pink', 'orange'
  ]; // Added more colors

  return (
    <div className="min-h-screen flex justify-center items-center" style={{ backgroundColor: colorSet }}>
      {/* Mapping through the colors */}
      {bgColorArray.map((eachColor) => (
        <Button 
          key={eachColor}            // Always add a unique key
          bgColor={eachColor}        // Pass the color to Button component
          onBgButtonClicked={setColor}  // Pass the function to update color
        />
      ))}
    </div>
  );
}

export default App;
