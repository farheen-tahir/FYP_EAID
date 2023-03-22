import "./HeroStyles.css";
function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img alt="hero-img" src={props.heroImg} />
      </div>
      <div className="hero-txt">
        <h1>{props.title}</h1>
        <p>{props.txt}</p>
        <a href={props.url} className={props.btnClass}>
          {props.btnText}
        </a>
      </div>
    </>
  );
}
//

export default Hero;
