import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../lib/firebase.js';

// pantalla - inicio de sesión
export function login(navigateTo) {
  const sectionLogin = document.createElement('section');
  sectionLogin.classList.add('sectionLogin');
  sectionLogin.innerHTML = `
  <img src='./lib/img/logo.png' class= 'logo2'>
    <form class="formInteraction" >
    <h2 class="initSection">Inicio de Sesión</h2>
    <label class="labelEmail">Correo Electronico</label>
    <input class="inputEmail" id="inputEmail" placeholder="ejemplo@gmail.com"></input>
    <label class="labelPassword">Contraseña</label>
    <input class="inputPassword" id="inputPassword" type="password" placeholder="********"></input>
    <span class="note1" id"note1"></span>
    <button class="getInt">Ingresar</button>
    <button class="bottomText">¿No tienes una cuenta? Regístrate</button>
    </form>
    </section >
    `;

  const checkIn = sectionLogin.querySelector('.bottomText');
  checkIn.addEventListener('click', () => {
    navigateTo('/register');
  });

  const keep = sectionLogin.querySelector('.formInteraction');
  keep.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = sectionLogin.querySelector('.inputEmail').value;
    const password = sectionLogin.querySelector('.inputPassword').value;

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigateTo('/mainScreen');
      })
      .catch(() => {
        sectionLogin.querySelector('.note1').innerHTML = '<h2 class="textNote">La dirección de correo electrónico o la contraseña que has introducido no son correctas.</h2>';
      });
  });

  return sectionLogin;
}
