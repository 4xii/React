import React from 'react';
import logo from './assets/images/logo.svg';
import robots from './mockdata/robots.json';
import Robot from "./components/Robot";
import styles from './App.module.css';
import ShoppingCart from './components/ShoppingCart'

interface Props{}

interface State{
  robotGallery:any[];
}

class App extends React.Component<Props,State> {
  constructor(props:any){
    super(props);
    this.state = {
      robotGallery:[],
    };
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => this.setState({ robotGallery:data }));
  }

  // * 生命周期第二阶段：更新
  //在组件接受到一个新的prop(更新后)时被调用
  //componentWillReceiveProps
  //state getDerivedStateFromProps(nextProps,prevState){}//探测state props是否发生变化
  //shouldComponentUpdate(nextProps,nextState){//判断组件是否需要被更新
  //  return nextState.some !== this.state.some
  //}
  //组件更新后调用
  componentDidUpdate(){}
  
  // * 生命周期第三阶段：销毁  回收内存 删除事件监听
  //组件销毁后调用
  //可以当作析构函数 destructor 来使用
  componentWillUnmount(){}
  
  render() {
    return (
      <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo"/>
        <h1>猪猪机器人ROBOT购物平台哟</h1>
      </div>
      <ShoppingCart />
      <div className={styles.robotList}>
        {this.state.robotGallery.map((r) => (
          <Robot id={r.id} email={r.email} name={r.name} />
        ))}
      </div>
    </div>
    )
  };
}

export default App;
