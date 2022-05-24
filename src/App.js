import './App.css';
import CardBox from './components/CardBox';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { ReactComponent as VehicleIcon } from './assets/icons/truck.svg';
import { ReactComponent as WalletIcon } from './assets/icons/creditcard.svg';
import { ReactComponent as BoxIcon } from './assets/icons/gift.svg';
import Baskets from './components/Baskets';
import Invites from './components/Invites';
import PreviousOrders from './components/PreviousOrders';
import RecentPayments from './components/RecentPayments';
import Cart from './components/Cart';

function App() {
  return (
    <div className='layout md:h-screen'>
      <Sidebar />
      <main className='px-5'>
        <Header />
        <div className='flex md:flex-nowrap flex-wrap gap-5 '>
          <CardBox
            title={'In-Transit Jobs'}
            value={'0'}
            icon={<VehicleIcon />}
            color={'bg-blue'}
          />
          <CardBox
            title={'Total Paid'}
            value={'$0.00'}
            icon={<WalletIcon />}
            color={'bg-green'}
          />
          <CardBox
            title={'Completed Jobs'}
            value={'0'}
            icon={<BoxIcon />}
            color={'bg-purple'}
          />
        </div>

        <Baskets />
        <Cart />
      </main>
      <div className='hidden md:grid grid-rows-3 p-3 border-l-2 border-gray-100'>
        <Invites />
        <PreviousOrders />
        <RecentPayments />
      </div>
    </div>
  );
}

export default App;
