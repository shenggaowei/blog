# React 合成事件

1. 合成事件的概念和作用
2. 合成事件与原生事件的 3 个区别
3. 合成事件和原生事件的执行顺序
4. 合成事件的常见问题

```jsx
import "./styles.css";
import React from "react";
export default function App() {
  const appClick = React.useRef(() => {
    console.log(".app=> click");
  });
  const documentClick = React.useRef(() => {
    console.log("document=> click");
  });
  const rootClick = React.useRef(() => {
    console.log("#root=> click");
  });
  React.useEffect(() => {
    const containerRef = document.querySelector(".App");
    const rootRef = document.querySelector("#root");
    document.addEventListener("click", documentClick.current);
    rootRef.addEventListener("click", rootClick.current);
    containerRef.addEventListener("click", appClick.current);
  }, []);
  const onClick = (e) => {
    console.log("react=> click");
  };
  return (
    <div className="App" onClick={onClick}>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
```
