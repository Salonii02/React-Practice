import React, { Component } from "react";
import head from "./head.jpg";
import tail from "./tail.jpg";
import styled from "styled-components";

const Image = styled.img`
  width: 200 px;
  height: 200 px;
`;

export default class Flip extends Component {
  constructor(props) {
    super(props);
    this.state = { coinexist: false, head: false, tail: true };
    this.getCoin = this.getCoin.bind(this);
  }
  getCoin() {
    this.setState({
      coinexist: true,
      head: !this.state.head,
      tail: !this.state.tail
    });
  }
  render() {
    const head1 = this.state.coinexist && this.state.head;
    const tail1 = this.state.coinexist && this.state.tail;
    return (
      <div>
        <button onClick={this.getCoin}>Flip Meeee</button>
        {head1 && <Image src={head} alt="head" />}
        {tail1 && <Image src={tail} alt="tail" />}
      </div>
    );
  }
}
