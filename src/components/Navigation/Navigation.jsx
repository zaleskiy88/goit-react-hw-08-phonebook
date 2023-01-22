import { useSelector } from 'react-redux';
import { selectAuth } from 'index';
import { Link } from 'index';

export const Navigation = () => {
  const state = useSelector(selectAuth);

  return (
    <nav>
      <Link to="/">Home</Link>

      {state.isLoggedIn && <Link to="contacts">Phonebook</Link>}
    </nav>
  );
};
