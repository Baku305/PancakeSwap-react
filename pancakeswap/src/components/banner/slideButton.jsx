
import "./_slideButton.scss";


export function SlideButton(props) {

  return (
    <>
        <div
          className={props.className}
          onClick={props.onClick }
          id="Slide1Bt"
        ></div>
    </>
  );
}
