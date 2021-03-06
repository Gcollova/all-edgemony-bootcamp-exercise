import { useReducer } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import CreatePost from "./components/CreatePost";

const INIT_STATE = {
  name: "Feisbrut",
  nav: [
    { link: "/", label: "Home" },
    { link: "/posts", label: "Create New Post"},
    { link: "/messages", label: "Messages" },
    { link: "/friends", label: "Friends" },
  ],
  friendsPreview: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "change-name":
      return { ...state, name: "Feisbell" };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  return (
    <div>
      <Header name={state.name} links={state.nav} />

      <button onClick={() => dispatch({ type: "change-name" })}>
        Cambia nome
      </button>

      <Routes>
        <Route path="/posts" element={<CreatePost/>} />
        <Route path="/" element={<Home />} />
        <Route path="/messages" element={<h3>Messages</h3>} />
        <Route path="/friends" element={<h3>Friends</h3>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
