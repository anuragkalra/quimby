import React from "react";

class OrderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { quantity: "", address: "" }; //Keep state in parent  //Done
  }

  //Event handler for order change // Done
  orderInfoChanged = (val) => {
    this.setState({ quantity: val });
  };

  addressChanged = (val) => {
    this.setState({ address: val });
  };

  render() {
    return (
      <div>
        {/* <h1>Welcome to Product Order Screen...</h1> */}

        {/* <OrderInfoComponent
          quantity={this.state.quantity}
          onQuantityChange={this.orderInfoChanged}
        ></OrderInfoComponent> */}

        <AddressComponent
          address={this.state.address}
          onAddressChange={this.addressChanged}
        ></AddressComponent>

        <SummaryComponent
          quantity={this.state.quantity}
          address={this.state.address}
          onQuantityChange={this.orderInfoChanged}
        ></SummaryComponent>
      </div>
    );
  }
}

class AddressComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange = (e) => {
    this.props.onAddressChange(e.target.value);
  };

  render() {
    return (
      <div style={{ border: "3px solid red" }}>
        <h2>Address Information...</h2>

        <p>
          <label>
            Address :{" "}
            <textarea
              value={this.props.address}
              onChange={this.handleChange}
            ></textarea>
          </label>
        </p>
      </div>
    );
  }
}

class SummaryComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange = (e) => {
    this.props.onQuantityChange(e.target.value);
  };

  render() {
    return (
      <div style={{ border: "3px solid red" }}>
        <h2>Summary...</h2>

        <p>
          <label>
            Product Name : <b>Product - 1</b>
          </label>
        </p>

        <p>
          <label>
            Product Quantity :{" "}
            <input
              type="text"
              value={this.props.quantity}
              onChange={this.handleChange}
            ></input>
          </label>
        </p>

        <p>
          <label>
            Address : <b>{this.props.address}</b>
          </label>
        </p>

        <button>Place Order</button>
      </div>
    );
  }
}

export default OrderComponent;
