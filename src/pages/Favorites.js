import { useContext } from 'react';

import FavoritesContext from '../store/favorites-context';
import MeetupList from '../components/meetups/MeetupList';

import './/Favorites.css'

//{content}
function FavoritesPage() {
 /* const favoritesCtx = useContext(FavoritesContext);

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = <p>No one is on the leaderboard. Maybe you can be the first and take the lead!</p>;
  } else {
    content = <MeetupList meetups={favoritesCtx.favorites} />;
  }
*/
  return (
    <section>
      <iframe title="leaderboard" class="leaderboard" src="https://script.google.com/macros/s/AKfycbyPPGB6-UIthdM_B22JIXAgkTiecmUgjArhzjqVRjVNVJqKzjsQLhbjlnvJRSLuOLabtQ/exec"></iframe>
    </section>
  );
}

export default FavoritesPage;
