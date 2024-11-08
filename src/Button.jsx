function Button({ bgColor, onBgButtonClicked }) {
    // Handle the color change when clicked
    const handleClick = () => {
      onBgButtonClicked(bgColor); // Trigger color change in parent
    };
  
    return (
      <span
        className={`inline-flex items-center rounded-md bg-${bgColor}-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10`}
        onClick={handleClick}  // Use the optimized event handler
      >
        {bgColor.charAt(0).toUpperCase() + bgColor.slice(1)} {/* Capitalize the first letter */}
      </span>
    );
  }
  
  export default Button;
  