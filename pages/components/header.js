export default function Header(){
return (

    <div>
    <div class="container text-center">
    <div class="row">
    <div class="col">
      <div className="title white">Livraria</div>
    </div>
    <div class="col">
    </div>
    <div class="col">
    <nav className="navbar navbar-expand-lg bg">
         <div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" href="#"><span className="headitem white">Login</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><span className="headitem white">Produtos</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><span className="headitem white">Sacola</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><span className="headitem white">Usuário</span></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
    </div>
    <div class="container text-center">
  <div class="row">
    <div class="col">
    <div class="card-body">
    <div className="white">Às vezes a leitura é um modo engenhoso de evitar o pensamento.</div>
    </div>
    </div>
    <div class="col">
    </div>
  </div>
</div>
    </div>
    </div>
)
}