import React from "react";
import styles from "./ShoppingCart.module.css"
import { FiShoppingCart } from "react-icons/fi"

interface Props {

}

interface State {
  isOpen: boolean
}

class ShoppingCart extends React.Component<Props, State>{
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    //this.handleClick = this.handleClick.bind(this)
  }

  handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    //箭头函数将会从函数外部绑定更高级别的this关键词，这样this就不会被函数改变了。指向React.component
    //箭头函数完全修复了this的指向，this总是指向词法作用域，即外层调用者
    if((e.target as HTMLElement).nodeName === "SPAN"){
      this.setState({ isOpen: !this.state.isOpen })
    }
  }
  //使用bind()
  // handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>){
  //   this.setState({isOpen: !this.state.isOpen})
  // }

  render() {
    return (
      <div className={styles.cartContainer}>
        <button className={styles.button}
          onClick={this.handleClick}
        >
          <FiShoppingCart/>
          <span>购物车2(件)</span>
        </button>
        <div className={styles.cartDropDown}
          style={{
            display: this.state.isOpen ? "block" : "none"
          }}
        >
          <ul>
            <li>robot 1</li>
            <li>robot 2</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default ShoppingCart;