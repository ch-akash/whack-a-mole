import { h } from "preact";
import { useCallback, useState } from "preact/hooks";
import _ from "lodash";
import style from "./style.css";

const idleTimeout = 10_000;
const boxSize = 100;

const Home = () => {

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const clickHandler = useCallback(() => {
    let newX = _.random(window.innerWidth);
    let newY = _.random(window.innerHeight);

    if (newX + boxSize > window.innerWidth) {
      newX = window.innerWidth - boxSize;
    }
    if (newY + boxSize > window.innerHeight) {
      newY = window.innerHeight - boxSize;
    }

    setX(newX);
    setY(newY);

    setTimeout(() => {
      setX((window.innerWidth - boxSize) / 2);
      setY((window.innerHeight - boxSize) / 2);
    }, idleTimeout);
  
  }, [setX, setY]);

  return (
    <div class={style.home}>
      <div
        class={style.box}
        style={{ left: `${x}px`, top: `${y}px` }}
        onClick={clickHandler}
      />
    </div>
  );
};

export default Home;
