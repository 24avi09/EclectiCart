import './App.css';
// import NavigationBar from './customer/components/navigation/Navigation';
import { HomePage, NavigationBar } from './customer';

function App() {
  return (
    <div className="">
      <NavigationBar />
      <div>
        <HomePage/>
      </div>
    </div>
  );
}

export default App;
