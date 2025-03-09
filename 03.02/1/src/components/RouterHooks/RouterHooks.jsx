import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation, useMatch, useNavigate, useParams, useSearchParams } from 'react-router-dom';

export default function RouterHooks() {
  const [user, setUser] = useState(null);
  const [post, setPost] = useState(null);
  const navigate = useNavigate(); // программно переходим на другие URL
  const { pathname } = useLocation(); // определить, на каком URL мы находимся прямо сейчас
  const params = useParams(); // достать динамические параметры (:something) из URL
  const isUserPage = useMatch('/users/'); // проверить URL на соответствие указанному шаблону
  const [queryParams, setQueryParams] = useSearchParams(); // достать query-параметры (?key=value) из URL

  const userId = params.id;

  const fetchUser = async () => {
    // const { data } = await axios(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const { data } = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`); // with query param
    // setUser(data);
    setPost(data);
    console.log(data);
  };

  useEffect(() => fetchUser, []);

  // if (location.pathname === '/users/profile') {
  //   doSomething()
  // }

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleNavigation = () => {
    navigate('/dashboard');
  };

  return (
    <>
      <p>{user?.name}</p>
      <p>{user?.title}</p>
      <div className='buttons'>
        <button onClick={handleNavigation}>Go to Dashboard</button>
        <button onClick={handleGoBack}>Go Back</button>
      </div>
    </>
  );
}