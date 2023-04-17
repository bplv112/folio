import './App.css';
import Main from './Components/Main';
import TabContext from './Store/tab-context';
import React, { useState, useEffect } from 'react';



function App() {
  const [tab, setTab] = useState('home');

  const changeTab = ( tab ) => {
    setTab( tab );
  };



  useEffect(() => {
    var oldScrollY = window.scrollY;

    window.onscroll = () => {
      var element = document.querySelector('body');
      console.log('here');
      if(oldScrollY < window.scrollY){
        console.log('down');
      } else {
        console.log('up');
      }
    }
    }, []);
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
