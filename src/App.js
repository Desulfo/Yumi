import "./App.css";
import MainNav from "./organisms/MainNav";
import WelcomeArticle from "./organisms/WelcomeArticle";
import MealList from "./organisms/MealList";

function App() {
  return (
    <>
      <MainNav />
      <header className="App-header" />
      <WelcomeArticle />
      <MealList />
    </>
  );
}

export default App;
