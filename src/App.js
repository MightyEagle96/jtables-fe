import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import MainRoutes from "./routes";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div>
      <Navigation />
      <MainRoutes />
    </div>
  );
}

export default App;
