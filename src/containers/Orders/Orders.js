import React from "react";

import Order from "../../components/Order/Order";

import axios from "../../api/axios-orders";

import withErrorHandler from "../../hoc/ErrorHandler/ErrorHandler";

class Orders extends React.Component {
  state = {
    orders: [],
    loading: true,
  };

  async componentDidMount() {
    const response = await axios.get("/orders.json");
    if (response) {
      const orderArray = Object.entries(response.data);
      this.setState({ orders: orderArray, loading: false });
    }
  }

  render() {
    const orders = this.state.orders.map((val) => (
      <Order
        key={val[0]}
        ingredients={val[1].ingredients}
        price={+val[1].price}
      />
    ));
    return <div>{orders}</div>;
  }
}

export default withErrorHandler(Orders, axios);
