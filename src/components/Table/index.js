import React, { Component } from "react";
import { connect } from "react-redux";
import { getRates } from "../../api/rates";
import { addRates } from "../../actions/rates";

import "./style.css";
class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.rates
    };
  }
  componentWillMount() {
    getRates.then(data => {
      this.props.addRates(data.rates);
      this.setState({
        list: data.rates
      });
    });
  }
  
  render() {
    const dataObj = this.state.list;
    const data = Object.keys(this.state.list);
    return (
        <div className="some-page-wrapper">
        {data.map((item)=>{
          return <div className="row" key = {item}>
          <div className='column'>
            <h1>{item}</h1>
          </div>
          <div className='column'>
            <h1>{dataObj[item]}</h1>
          </div>
            </div>
        })}
        </div>
    );
  }
}

const mapStateToProps = store => ({
  rates: store.rates
});
const mapDispatchToProps = dispatch => {
  return {
    addRates: data => dispatch(addRates(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
