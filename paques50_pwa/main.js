import './style.css';
document.getElementById('app').innerHTML = `
  <h1>Pâques 50</h1>
  <p>Application à venir avec les 50 jours du parcours.</p>
`;
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}