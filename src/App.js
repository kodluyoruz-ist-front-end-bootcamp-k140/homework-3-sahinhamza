import './App.css';
import { useState } from 'react';
import { Header } from './components/header';
import { Body } from './components/body';

function App() {
  const [activeTab, setActiveTab] = useState("fn")
  return (
    <div>
      <Header />
      <Body
        activeTab={activeTab}
        setActiveTab={setActiveTab} />
    </div>
  );
}

export default App;
