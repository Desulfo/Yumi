import "./App.css";
import MainNav from "./organisms/MainNav";
import WelcomeArticle from "./organisms/WelcomeArticle";
import MealList from "./organisms/MealList";
import CartProvider from "./assets/store/CartProvider";

function App() {
  return (
    <CartProvider>
      <MainNav />
      <header className="App-header" />
      <WelcomeArticle />
      <MealList />
    </CartProvider>
  );
}

export default App;
