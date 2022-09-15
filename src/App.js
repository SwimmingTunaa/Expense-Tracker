import './App.scss'
import { Balance } from './Components/Balance';
import { TransactionList } from './Components/TransactionList';
import { NewTransaction } from './Components/NewTransaction';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <div className='gradient'>
        <div className="main flex-c jcc">
          <h2 className='pad-lrg-v'>Expense Tracker</h2>
          <Balance />
          <TransactionList />
          <NewTransaction/>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
