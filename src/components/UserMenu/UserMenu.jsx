import { useSelector, useDispatch } from 'react-redux';
import { selectAuth } from 'redux/selectors';
import { logOutUser } from 'index';

export const UserMenu = () => {
  const state = useSelector(selectAuth);
  const dispatch = useDispatch();

  return (
    <div>
      <p>{state.user.email}</p>
      <button onClick={() => dispatch(logOutUser())}>Logout</button>
    </div>
  );
};
