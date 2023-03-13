import { Route, Switch } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import TimerPage from './pages/Timer';
import JunkYardPage from './pages/JunkYard';
import SheetApp from './pages/SheetApp';
import Sheet from './pages/Sheet';
import Layout from './components/layout/Layout';
import XPage from './pages/X';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <TimerPage />
        </Route>
        <Route path='/new-meetup'>
          <AllMeetupsPage />
        </Route>
        <Route path='/favorites'>
          <FavoritesPage />
        </Route>
        <Route path='/timer'>
          <NewMeetupPage />
        </Route>
        <Route path='/junkyard'>
          <JunkYardPage />
        </Route>
        <Route path='/sheet'>
          <SheetApp />
        </Route>
        <Route path='/googlesheet'>
          <Sheet />
        </Route>
        <Route path='/xtwofivefour'>
          <XPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
