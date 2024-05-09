import React, { Component } from "react";
import Subcont from '../Subcontent/Subcontent'
import Adver from '../Advertisement/Advertisement'

export default class Main extends Component {
  render() {
    return <div className="main">
      <Subcont/>
      <Subcont/>
      <Subcont/>
      <Adver/>
    </div>;
  }
}
