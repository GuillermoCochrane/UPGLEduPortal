import { Route , Switch } from "react-router-dom";
import Error404 from "./pages/Error404/Error404"
import Courses from "./pages/Courses/Courses";
import Home from "./pages/Home/Home";

function App() {

  return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/courses" exact component={Home} />
        <Route path="/courses/:courseId" exact component={Courses} />
        <Route component={Error404} />
      </Switch>
  )
}

export default App