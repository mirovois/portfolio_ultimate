import React from "react";
import "./App.css";
import Layout from "./components/Layout";
import Projects from "./components/Projects";
import Home from "./components/Home";
import Resume from "./components/Resume";
import ContactPage from "./components/ContactPage";
import ParticleBackground from "./components/ParticlesBackground";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Layout>
          <ParticleBackground />
        </Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/resume" component={Resume} />
          <Route path="/contacts" component={ContactPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
