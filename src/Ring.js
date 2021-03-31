import './Ring.css';

function Ring(props) {
  return(
    <div className="Ring">

    <footer>
      <p className="Webring-text">Proud Member of the Zoomer Hacking webring</p>
      <p className="Webring-text">
        <a
          className="Webring-link"
          href={props.prevLink}
          rel="noopener noreferrer"
          >
         ⬅️ Prev
        </a>&nbsp;|&nbsp;
        <a
          className="Webring-link"
          href="https://stephenvk.xyz/ring/"
          rel="noopener noreferrer"
          >
          All
        </a>&nbsp;|&nbsp; 
        <a
          className="Webring-link"
          href={props.nextLink}
          rel="noopener noreferrer"
          >
          Next ➡️
        </a> 
      </p>
    </footer>
    </div>
  );
}

export default Ring;