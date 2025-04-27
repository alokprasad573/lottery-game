export default function Button({ action }) {
    
  const buttonStyles = { 
    backgroundColor: "blue", 
    color: "black", 
    borderRadius: "5px", 
    marginTop: "10px" 
  }
  
    return (
      <button onClick={action} style={buttonStyles}>
        Generate New Ticket
      </button>
    );
  }