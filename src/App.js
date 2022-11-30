import { useState } from 'react';
// import ClickCounter from './components/ClickCounter'
// import UseContextDemo from './components/UseContextDemo'
// import UseReducerDemo from './components/UseReducerDemo';
import UseMemoDemo from './components/UseMemoDemo';
// import UseCallbackDemo from './components/UseCallbackDemo';
// import CustomHook from './components/CustomHook';
// import UseStateTrap from './components/UseStateTrap';
// import UseEffectTrap from './components/UseEffectTrap';

function App() {
  const [flag, setFlag] = useState(true)

  function changeFlag() {
    setFlag(!flag)
  }

  return (
    <div>
      {/* <UseContextDemo></UseContextDemo> */}
      {/* <UseReducerDemo></UseReducerDemo> */}
      <UseMemoDemo></UseMemoDemo>
      {/* <UseCallbackDemo></UseCallbackDemo> */}
      {/* <CustomHook></CustomHook> */}
      {/* <UseStateTrap></UseStateTrap> */}
      {/* <UseEffectTrap></UseEffectTrap> */}
      <button onClick={changeFlag}>flag</button>
    </div>
  );
}

export default App;
