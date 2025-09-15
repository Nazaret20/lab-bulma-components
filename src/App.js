import SignupForm from "./components/SignupForm";
import Message from "./components/Message";
import "./App.css";
import "bulma/css/bulma.css";

function App() {
  return (
    <div className="App">
      <SignupForm />
      <Message isInfo title="Hello World">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        <strong>Pellentesque risus mi</strong>.
      </Message>
    </div>
  );
}

export default App;
