import React from "react";

class Order extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { label, nameOfClass } = this.props;

    return (
      <div>
        <div className={nameOfClass}>
          <span>{label}</span>
        </div>
      </div>
    );
  }
}

export default Order;
