import "./App.css";
import Form from "./components/Form";
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from "./components/Navbar";

function App() {
  const { isAuthenticated } = useAuth0();
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (isAuthenticated) {
    return (
      <div>
        <Navbar />
      </div>
    );
  } else {
    return (
      <div>
        <Form />
      </div>
    );
  }
}

export default App;
