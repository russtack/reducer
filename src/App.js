import { BrowserRouter, Route, Routes } from "react-router-dom";

import Post from "./Post";
import Form from "./Form";

function App() {
  return (
    // <div>
    //   <Form />
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Post />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
