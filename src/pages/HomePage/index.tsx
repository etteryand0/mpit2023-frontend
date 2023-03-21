import React from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { atom } from 'jotai';
import { useAtom } from 'jotai/react';
import { Helmet } from 'react-helmet-async';
import { useLoginMutation } from '@/generated/graphql';

export const countAtom = atom(0);

function HomePage() {
  const [count, setCount] = useAtom(countAtom);
  const [doLogin] = useLoginMutation();

  const onLogin = async () => {
    const { data } = await doLogin({
      variables: {
        data: {
          email: 'sergey3789pe@gmail.com',
          password: '12345678',
        },
      },
    });

    if (data?.login?.token) {
      localStorage.setItem('token', data.login.token);
    }
  };

  return (
    <div className="App">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
        <button onClick={onLogin}>login</button>
        <p>
          Edit <code>src/app/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default HomePage;
