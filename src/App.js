import './App.css';
import Main from './Components/Main';
import TabContext from './Store/tab-context';
import React, { useState } from 'react';



function App() {
  const [tab, setTab] = useState('home');

  const changeTab = ( tab ) => {
    setTab( tab );
  };



  return (
    <TabContext.Provider
      value={{
        currentTab: 'home',
        onTabChange: changeTab
      }}
    >
      <div className="App">
        <Main tab={tab} />
      </div>
    </TabContext.Provider>
  );
}

export default App;
