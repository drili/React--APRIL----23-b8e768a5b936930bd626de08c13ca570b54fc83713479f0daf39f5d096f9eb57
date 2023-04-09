import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/home';
import Auth from './pages/auth';
import CreateRecipe from './pages/create-recipe';
import SavedRecipes from './pages/saved-recipes';

import Nav from './components/Nav';

function App() {
    return (
        <div className="App">
            <Router>
                <Nav></Nav>
                
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/auth" element={<Auth></Auth>}></Route>
                    <Route path="/create-recipe" element={<CreateRecipe></CreateRecipe>}></Route>
                    <Route path="/saved-recipes" element={<SavedRecipes></SavedRecipes>}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
