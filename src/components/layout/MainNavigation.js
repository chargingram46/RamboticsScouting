import { useContext } from 'react';
import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import FavoritesContext from '../../store/favorites-context';
import Ramlogo from "./Ramlogo.png"

//<span className={classes.badge}>
         //       {favoritesCtx.totalFavorites}
           //   </span>

function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <img title="logo" src={Ramlogo} alt="logo"></img>
      Rambotics Scouting  
      <nav>
        <ul>
          <li>
            <Link to='/'>Scouting</Link>
          </li>
          <li>
            <Link to='/new-meetup'>Scouting Results</Link>
          </li>
          <li>
            <Link to='/favorites'>
              Leaderboard
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
