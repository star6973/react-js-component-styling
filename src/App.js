import "./style/App.scss";
import SassComponent from "./Components/SassComponent";
import CSSModule from "./Components/CSSModule";
import StyledComponent from "./Components/StyledComponent";
import Button from "./Components/Button";

function App() {
  return (
    <div className="App">
      <SassComponent />
      <CSSModule />
      <StyledComponent />
      <div className="Button-Container">
        <div className="buttons">
          <Button size="large" onClick={() => console.log("Clicked!")}>Button</Button>
          <Button>Button</Button>
          <Button size="small">Button</Button>
        </div>
        <div className="buttons">
          <Button size="large" color="gray">Button</Button>
          <Button color="gray">Button</Button>
          <Button size="small" color="gray">Button</Button>    
        </div>
        <div className="buttons">
          <Button size="large" color="pink">Button</Button>
          <Button color="pink">Button</Button>
          <Button size="small" color="pink">Button</Button>  
        </div>
        <div className="buttons">
          <Button size="large" color="cyan" outline="true">Button</Button>
          <Button color="cyan" outline="true">Button</Button>
          <Button size="small" color="cyan" outline="true">Button</Button>  
        </div>
        <div className="buttons">
          <Button size="large" color="orange" fullWidth="true">Button</Button>
          <Button color="orange" fullWidth="true">Button</Button>
          <Button size="small" color="orange" fullWidth="true">Button</Button>  
        </div>
      </div>
    </div>
  );
}

export default App;