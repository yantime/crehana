export function PageLogin() {
    return  <div className="row d-flex justify-content-center">
      <div className="col-4">
    
  <main class="form-signin">
  <form>
    <h1 className="mt-5"> Bienvenido de vuelta</h1>
    <p> Que bueno verte otra vez :)</p>
  
    

    <div class="form-floating ">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
      <label for="floatingInput">Correo </label>
    </div>
    <div class="form-floating mt-3">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
      <label for="floatingPassword">Contraseña</label>
    </div>

    
    <button class="w-100 btn btn-lg btn-primary mt-3" type="submit">Iniciar sesión</button>
    <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
  </form>
  
</main>

</div>
</div>
  }