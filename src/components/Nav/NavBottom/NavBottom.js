import React from 'react'
import { Link } from 'react-router-dom';

function NavBottom() {
  return (
    <div className="nav-bottom">
        <ul className="nav-links">
          <Link 
            style={{ textDecoration: 'none' }} 
            to='./'
          >
            <li>Home</li>
          </Link>
          <Link 
            style={{ textDecoration: 'none' }}
            to='./produtos'
          >
            <li>Nossos Produtos</li>
          </Link>
          <Link
            style={{ textDecoration: 'none' }}
            to='./fornecedores'
          >
          <li>Fornecedores</li>
          </Link>
          <Link
            style={{ textDecoration: 'none' }}
            to='./sobre_nos'
          >
          <li>Sobre Nós</li>
          </Link>
          <Link
            style={{ textDecoration: 'none' }}
            to='./contato'
          >
          <li>Contato</li>
          </Link>
          <Link
            style={{ textDecoration: 'none' }}
            to='./lojas'
          >
            <li>Nossas Lojas Virtuais</li>
          </Link>
        </ul>
      </div>
  )
}

export default NavBottom;
