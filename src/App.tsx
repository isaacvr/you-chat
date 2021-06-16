import React from 'react'
import './App.scss';
import Navbar from './components/navbar/Navbar';
import Background from './components/background/Background';

function App() {
  return (
    <>
      <Background />
      <Navbar />
      <section className="content">
        <article className="banner">
          <h1>&nbsp;</h1>
          <span>Aplicación diseñada para atraer a la mayoría del público por su interfaz gráfica</span>
        </article>
        <article className="login-form">
          <div className="input-wrapper">
            {/* <object type="image/svg+xml" className="input-icon left" data="/src/assets/profile.svg"></object> */}
            <svg className="input-icon left jumper" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs/><g id="Iconly/Curved/Profile" fill="none" fillRule="evenodd" stroke="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"><g id="Profile" stroke="#000" strokeWidth="1.5" transform="translate(5 2.4)"><path d="M6.845 19.262C3.153 19.262 0 18.687 0 16.387c0-2.301 3.133-4.425 6.845-4.425 3.691 0 6.844 2.103 6.844 4.404 0 2.3-3.133 2.896-6.844 2.896z"/><path d="M6.837 8.774a4.386 4.386 0 100-8.774A4.388 4.388 0 002.45 4.387a4.371 4.371 0 004.356 4.387h.031z"/></g></g></svg>
            <input id="email" type="text" placeholder="Correo Nauta..." />
          </div>
          <div className="input-wrapper">
            <svg className="input-icon left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs/><g id="Iconly/Curved/Unlock" fill="none" fillRule="evenodd" stroke="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"><g id="Unlock" stroke="#000" strokeWidth="1.5" transform="translate(3.5 2)"><path id="Stroke-1" d="M12.776 3.988A4.563 4.563 0 003.85 5.235v2.169"/><path id="Stroke-3" d="M8.41 12.156v2.221"/><path id="Stroke-5" d="M8.41 6.824c-5.745 0-7.66 1.568-7.66 6.271 0 4.704 1.915 6.272 7.66 6.272 5.746 0 7.661-1.568 7.661-6.272 0-4.703-1.915-6.27-7.66-6.27z"/></g></g></svg>
            {/* <object type="image/svg+xml" className="input-icon left" data="/src/assets/unlock.svg"></object> */}
            <input id="password" type="password" placeholder="Contraseña" />
            <object type="image/svg+xml" className="input-icon right" data="/src/assets/show.svg"></object>
          </div>
          <button className="login-btn">Continuar</button>
          <span className="login-with">Continuar con</span>
          <ul className="services">
            {/* <li><object id="gmail" type="image/svg+xml" data="/src/assets/gmail.svg"></object></li> */}
            <li>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ><path d="M22 3H2C0.9 3 0 3.9 0 5v14c0 1.1 0.9 2 2 2h20c1.1 0 2-0.9 2-2V5C24 3.9 23.1 3 22 3z" style={{fill:"#F2F2F2"}}/><path d="M3 21h19c1.1 0 2-0.9 2-2V5.1L3 21z" style={{fill:"#F5F5F5"}}/><linearGradient gradientUnits="userSpaceOnUse" x1="7.9" x2="19.2" y1="10.5" y2="15.7" ><stop offset="0" style={{stopColor:"#fff",stopOpacity:0.2}}/><stop offset="1" style={{stopColor:"#FFF", stopOpacity:0}}/></linearGradient><polygon points="3 21 3.3 21 24 5.4 24 5.1 " style={{fill:"url(#SVGID_1_)"}}/><path className="path1" d="M0 5.1V19c0 1.1 0.9 2 2 2h1V7.3C1.3 6.1 0.9 5.8 0 5.1z" style={{fill:"#D32F2F"}}/><path className="path2" d="M21 7.3V21h1c1.1 0 2-0.9 2-2V5.1L21 7.3z" style={{fill:"#D32F2F"}}/><linearGradient gradientUnits="userSpaceOnUse" x1="18.9" x2="26.6" y1="9.5" y2="17.2" ><stop offset="0" style={{stopColor:"#000",stopOpacity:0.1}}/><stop offset="1" style={{stopColor:"#000",stopOpacity:0}}/></linearGradient><path d="M21 7.3V21h1c1.1 0 2-0.9 2-2V5.1L21 7.3z" style={{fill:"url(#SVGID_2_)"}}/><polygon points="21.5 3 2.5 3 12 10.3 " style={{fill:"#f5f5f5"}}/><path className="path3" d="M24 5.1V5c0-1.1-0.9-2-2-2h-0.5L12 10.3 2.5 3H2C0.9 3 0 3.9 0 5v0.1l12 9.1L24 5.1z" style={{fill:"#D32F2F"}}/><linearGradient gradientUnits="userSpaceOnUse" x1="1.5" x2="21.5" y1="1.3" y2="10.6" ><stop offset="0" style={{stopColor:"#FFF",stopOpacity:0.1}}/><stop offset="1" style={{stopColor:"#FFF", stopOpacity:0}}/></linearGradient><path d="M24 5.1V5c0-1.1-0.9-2-2-2h-0.5L12 10.3 2.5 3H2C0.9 3 0 3.9 0 5v0.1l12 9.1L24 5.1z" style={{fill:"url(#SVGID_3_)"}}/><path d="M12 13.9L0 4.9C0 4.9 0 5 0 5v0.1l12 9.1 12-9.1V5c0 0 0-0.1 0-0.1L12 13.9z" style={{opacity:0.1}}/><path d="M22 20.8H2c-1.1 0-2-0.9-2-2V19c0 1.1 0.9 2 2 2h20c1.1 0 2-0.9 2-2v-0.2C24 19.9 23.1 20.8 22 20.8z" style={{opacity:0.1}}/><linearGradient gradientUnits="userSpaceOnUse" x1="23.7" x2="24" y1="4.2" y2="4.4" ><stop offset="0" style={{stopColor:"#000",stopOpacity:0.1}}/><stop offset="1" style={{stopColor:"#000",stopOpacity:0}}/></linearGradient><path d="M23.8 4.1L23.8 4.1c0.1 0.1 0.1 0.3 0.2 0.4C23.9 4.4 23.8 4.2 23.8 4.1z" style={{fill:"url(#SVGID_4_)"}}/><linearGradient gradientUnits="userSpaceOnUse" x1="23.8" x2="24.1" y1="4.6" y2="4.9" ><stop offset="0" style={{stopColor:"#000",stopOpacity:0.1}}/><stop offset="1" style={{stopColor:"#000",stopOpacity:0}}/></linearGradient><path d="M23.9 4.5C24 4.7 24 4.8 24 5 24 4.8 24 4.7 23.9 4.5z" style={{fill:"url(#SVGID_5_)"}}/><linearGradient gradientUnits="userSpaceOnUse" x1="6.5" x2="25.4" y1="-0.4" y2="18.4" ><stop offset="0" style={{stopColor:"#000",stopOpacity:0.1}}/><stop offset="1" style={{stopColor:"#000",stopOpacity:0}}/></linearGradient><path d="M0.5 5.5L16 21h6c1.1 0 2-0.9 2-2V5.1l-12 9.1L0.5 5.5z" style={{fill:"url(#SVGID_6_)"}}/><path d="M22 3H2C0.9 3 0 3.9 0 5v0.3c0-1.1 0.9-2 2-2h20c1.1 0 2 0.9 2 2V5C24 3.9 23.1 3 22 3z" style={{fill:"#FFF",opacity:0.2}}/><linearGradient gradientUnits="userSpaceOnUse" x1="-0.7" x2="24.7" y1="6.1" y2="17.9" ><stop offset="0" style={{stopColor:"#FFF",stopOpacity:0.1}}/><stop offset="1" style={{stopColor:"#FFF",stopOpacity:0}}/></linearGradient><path d="M22 3H2C0.9 3 0 3.9 0 5v14c0 1.1 0.9 2 2 2h20c1.1 0 2-0.9 2-2V5C24 3.9 23.1 3 22 3z" style={{ fill: "url(#SVGID_7_)" }}/></svg>
            </li>
            
            <li>
              <svg id="Layer_1" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="path1" d="M12 5c1.617 0 3.101.554 4.286 1.474l3.637-3.47A11.94 11.94 0 0012 0C7.392 0 3.397 2.6 1.386 6.41L5.43 9.603A6.996 6.996 0 0112 5z" fill="#F44336"/><path className="path4" d="M23.896 13.502C23.96 13.01 24 12.509 24 12c0-.858-.094-1.693-.265-2.5H12v5h6.486a7.072 7.072 0 01-2.648 3.32l4.06 3.204a11.987 11.987 0 003.998-7.522z" fill="#2196F3"/><path className="path2" d="M5 12c0-.843.157-1.648.43-2.397L1.386 6.41A11.94 11.94 0 000 12c0 1.997.495 3.876 1.358 5.533l4.05-3.197A6.972 6.972 0 015 12z" fill="#FFC107"/><path className="path3" d="M12 19a6.997 6.997 0 01-6.592-4.664l-4.05 3.197C3.36 21.373 7.37 24 12 24c3.028 0 5.789-1.125 7.897-2.976l-4.059-3.205A6.831 6.831 0 0112 19z" fill="#00B060"/><path d="M12 23.75a12.416 12.416 0 01-8.952-3.779C5.245 22.438 8.436 24 12 24a11.94 11.94 0 008.888-3.96A12.406 12.406 0 0112 23.75z" opacity=".1"/><path d="M23.994 12.147c.001-.05.006-.098.006-.147l-.002-.041c0 .063-.004.125-.004.188z" fill="#E6E6E6"/><path d="M12 9.5v.25h11.786a12.487 12.487 0 00-.05-.25H12z" fill="#FFF" opacity=".2"/><linearGradient gradientUnits="userSpaceOnUse" id="SVGID_1_" x1="0" x2="24" y1="12" y2="12"><stop offset="0" stopColor="#fff" stopOpacity="20%"/><stop offset="1" stopColor="#fff" stopOpacity="0"/></linearGradient><path d="M23.735 9.5H12v5h6.486C17.478 17.122 14.977 19 12 19a7 7 0 010-14c1.402 0 2.694.43 3.789 1.14.167.11.34.212.497.334l3.637-3.47-.082-.063A11.93 11.93 0 0012 0C5.373 0 0 5.373 0 12s5.373 12 12 12c6.118 0 11.155-4.581 11.896-10.498.063-.492.104-.993.104-1.502 0-.858-.094-1.693-.265-2.5z" fill="url(#SVGID_1_)"/><path d="M15.789 5.89A6.932 6.932 0 0012 4.75a7 7 0 00-6.999 7.117A6.994 6.994 0 0112 5c1.402 0 2.694.43 3.789 1.14.167.11.34.212.497.334l3.637-3.47-3.637 3.22c-.157-.122-.33-.224-.497-.333z" opacity=".1"/><path d="M12 .25c2.975 0 5.683 1.098 7.78 2.892l.143-.138-.11-.096A11.829 11.829 0 0012 0C5.373 0 0 5.373 0 12c0 .042.006.083.006.125C.074 5.555 5.415.25 12 .25z" fill="#FFF" opacity=".2"/></svg>
            </li>
            {/* <li><img src="/src/assets/google.svg"/></li> */}
            
            {/* <li><object id="facebook" type="image/svg+xml" data="/src/assets/facebook.svg"></object></li> */}
            <li>
            <svg xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" clipRule="evenodd" viewBox="0 0 512 512"><defs/><g fillRule="nonzero"><circle className="path1" cx="50%" cy="50%" r="50%" fill="#1877f2"/><path className="path2" fill="#fff" d="M355.65 330L367 256h-71v-48.022c0-20.245 9.917-39.978 41.719-39.978H370v-63s-29.297-5-57.305-5C254.219 100 216 135.44 216 199.6V256h-65v74h65v178.89a257.912 257.912 0 0040 3.11c13.608 0 26.966-1.065 40-3.11V330h59.65z"/></g></svg>
            </li>
          </ul>
        </article>
      </section>
    </>
  )
}

export default App
