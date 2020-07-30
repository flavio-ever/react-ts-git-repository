import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="" />
      <Title>Explore Repositorios no Github</Title>

      <Form action="">
        <input type="text" placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="a">
          <img
            src="https://avatars3.githubusercontent.com/u/22870639?s=400&u=a67c5d214c08df899bd8b55f6b8ba62e3af38578&v=4"
            alt="Flavio Ev3r"
          />
          <div>
            <strong>flavio.ever/unform</strong>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="a">
          <img
            src="https://avatars3.githubusercontent.com/u/22870639?s=400&u=a67c5d214c08df899bd8b55f6b8ba62e3af38578&v=4"
            alt="Flavio Ev3r"
          />
          <div>
            <strong>flavio.ever/unform</strong>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="a">
          <img
            src="https://avatars3.githubusercontent.com/u/22870639?s=400&u=a67c5d214c08df899bd8b55f6b8ba62e3af38578&v=4"
            alt="Flavio Ev3r"
          />
          <div>
            <strong>flavio.ever/unform</strong>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
