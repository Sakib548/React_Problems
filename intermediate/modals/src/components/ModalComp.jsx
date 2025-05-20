import { IoIosCloseCircle } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const ModalComp = ({ handleShow }) => {
  const { setShow, show } = handleShow;
  console.log(setShow);

  return (
    <div className="modal-overlay">
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="modal-header">
          <h1>Terms Of Service</h1>
          <button onClick={() => setShow(!show)} className="modal-close">
            <IoClose />
          </button>
        </div>
        <hr />
        <div className="modal-body">
          With less than a month to go before the European Union enacts new
          consumer privacy laws for its citizens, companies around the world are
          updating their terms of service agreements to comply. The European
          Union’s General Data Protection Regulation (G.D.P.R.) goes into effect
          on May 25 and is meant to ensure a common set of data rights in the
          European Union. It requires organizations to notify users as soon as
          possible of high-risk data breaches that could personally affect them.
        </div>
        <hr />
        <div className="modal-footer">
          <button onClick={() => setShow(!show)}>I accept</button>
          <button onClick={() => setShow(!show)}>Decline</button>
        </div>
      </div>
    </div>
  );
};

export default ModalComp;
