import { useHistory } from 'react-router-dom';

const MainScreen = () => {
  const history = useHistory();
  const dataInfo = JSON.parse(localStorage.getItem('userInfo'));

  return (
    <div className="homepage">
      <h1>Xin chào người ae: {dataInfo.name} </h1>
      <h3>#----User data information----#:</h3>
      <span>name: {dataInfo.name}</span>
      <span>email: {dataInfo.email}</span>
      <div className="homepage__button">
        <div
          className="button"
          onClick={() => {
            localStorage.removeItem('userInfo');
            history.push('/');
          }}
        >
          Logout
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
