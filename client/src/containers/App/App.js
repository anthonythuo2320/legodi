import React, { Component } from 'react';
import './App.css';
import Menu from '../../components/Menu/menu.js'
import About from '../../components/About/about.js'
import Header from '../../components/Header/header.js'
import { BrowserRouter as Router, Route } from "react-router-dom";
import CategoriesOverview from "../../components/Categories/CategoriesOverview/CategoriesOverview"
import SingleArticle from "../../containers/SingleArticle/SingleArticle";
import SingleCategory from "../../components/Categories/SingleCategory";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
           <Header headerTitle={"Legodi"}
            headerDesc={"Digital Welcome Pack For Refugee in Glasgow"} />
          <Menu   />
          <hr />
          <Route exact path="/" component={CategoriesOverview} />
          <Route path="/about" component={About} />
          <Route path="/categories" component={CategoriesOverview} /> 
          <Route path="/articles/:articleId" component={SingleArticle} />
          <Route path="/categories/:categoryId" component={SingleCategory} />
        </div>
      </Router>
    );
  }
}

export default App;
