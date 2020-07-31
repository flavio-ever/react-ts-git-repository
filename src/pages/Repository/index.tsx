import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logo from '../../assets/logo.svg';
import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logo} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars3.githubusercontent.com/u/22870639?s=400&u=a67c5d214c08df899bd8b55f6b8ba62e3af38578&v=4"
            alt="X"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
        </header>
        <ul>
          <li>
            <strong>100</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>44</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>32</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="dsadsa">
          <div>
            <strong>AAAA</strong>
            <p>BBBBB</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
