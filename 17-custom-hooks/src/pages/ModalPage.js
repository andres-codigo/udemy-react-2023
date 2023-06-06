import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button primary onClick={handleClose}>
        I Accept
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div className="relative">
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        freestar freestar Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Etiam quis odio suscipit, hendrerit ante quis, luctus urna.
        Vestibulum semper metus nec dolor gravida faucibus. Aliquam lectus
        turpis, tempus vel lectus et, blandit finibus nibh. Mauris porttitor dui
        at volutpat bibendum. Vestibulum ante ipsum primis in faucibus orci
        luctus et ultrices posuere cubilia curae; Vivamus maximus, neque in
        porta iaculis, nulla enim faucibus neque, ut lobortis ligula ligula eget
        augue. Maecenas vitae mollis neque. Proin tristique magna eros, eget
        lobortis nisi dictum semper. Etiam et eros porttitor, vulputate neque
        et, elementum sem. Ut ligula ligula, lobortis vel tempus vitae, varius
        eu nulla. Vivamus scelerisque lectus sed pretium eleifend. Cras
        venenatis nibh eget ipsum posuere tristique. Nam non ligula
        sollicitudin, elementum purus consequat, feugiat leo. Duis maximus enim
        a diam aliquam congue. Sed euismod ut leo id viverra. Proin tortor
        lacus, laoreet facilisis iaculis at, porta in neque.
      </p>
      <p>
        freestar freestar Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Etiam quis odio suscipit, hendrerit ante quis, luctus urna.
        Vestibulum semper metus nec dolor gravida faucibus. Aliquam lectus
        turpis, tempus vel lectus et, blandit finibus nibh. Mauris porttitor dui
        at volutpat bibendum. Vestibulum ante ipsum primis in faucibus orci
        luctus et ultrices posuere cubilia curae; Vivamus maximus, neque in
        porta iaculis, nulla enim faucibus neque, ut lobortis ligula ligula eget
        augue. Maecenas vitae mollis neque. Proin tristique magna eros, eget
        lobortis nisi dictum semper. Etiam et eros porttitor, vulputate neque
        et, elementum sem. Ut ligula ligula, lobortis vel tempus vitae, varius
        eu nulla. Vivamus scelerisque lectus sed pretium eleifend. Cras
        venenatis nibh eget ipsum posuere tristique. Nam non ligula
        sollicitudin, elementum purus consequat, feugiat leo. Duis maximus enim
        a diam aliquam congue. Sed euismod ut leo id viverra. Proin tortor
        lacus, laoreet facilisis iaculis at, porta in neque.
      </p>
      <p>
        freestar freestar Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Etiam quis odio suscipit, hendrerit ante quis, luctus urna.
        Vestibulum semper metus nec dolor gravida faucibus. Aliquam lectus
        turpis, tempus vel lectus et, blandit finibus nibh. Mauris porttitor dui
        at volutpat bibendum. Vestibulum ante ipsum primis in faucibus orci
        luctus et ultrices posuere cubilia curae; Vivamus maximus, neque in
        porta iaculis, nulla enim faucibus neque, ut lobortis ligula ligula eget
        augue. Maecenas vitae mollis neque. Proin tristique magna eros, eget
        lobortis nisi dictum semper. Etiam et eros porttitor, vulputate neque
        et, elementum sem. Ut ligula ligula, lobortis vel tempus vitae, varius
        eu nulla. Vivamus scelerisque lectus sed pretium eleifend. Cras
        venenatis nibh eget ipsum posuere tristique. Nam non ligula
        sollicitudin, elementum purus consequat, feugiat leo. Duis maximus enim
        a diam aliquam congue. Sed euismod ut leo id viverra. Proin tortor
        lacus, laoreet facilisis iaculis at, porta in neque.
      </p>
      <p>
        freestar freestar Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Etiam quis odio suscipit, hendrerit ante quis, luctus urna.
        Vestibulum semper metus nec dolor gravida faucibus. Aliquam lectus
        turpis, tempus vel lectus et, blandit finibus nibh. Mauris porttitor dui
        at volutpat bibendum. Vestibulum ante ipsum primis in faucibus orci
        luctus et ultrices posuere cubilia curae; Vivamus maximus, neque in
        porta iaculis, nulla enim faucibus neque, ut lobortis ligula ligula eget
        augue. Maecenas vitae mollis neque. Proin tristique magna eros, eget
        lobortis nisi dictum semper. Etiam et eros porttitor, vulputate neque
        et, elementum sem. Ut ligula ligula, lobortis vel tempus vitae, varius
        eu nulla. Vivamus scelerisque lectus sed pretium eleifend. Cras
        venenatis nibh eget ipsum posuere tristique. Nam non ligula
        sollicitudin, elementum purus consequat, feugiat leo. Duis maximus enim
        a diam aliquam congue. Sed euismod ut leo id viverra. Proin tortor
        lacus, laoreet facilisis iaculis at, porta in neque.
      </p>
      <p>
        freestar freestar Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Etiam quis odio suscipit, hendrerit ante quis, luctus urna.
        Vestibulum semper metus nec dolor gravida faucibus. Aliquam lectus
        turpis, tempus vel lectus et, blandit finibus nibh. Mauris porttitor dui
        at volutpat bibendum. Vestibulum ante ipsum primis in faucibus orci
        luctus et ultrices posuere cubilia curae; Vivamus maximus, neque in
        porta iaculis, nulla enim faucibus neque, ut lobortis ligula ligula eget
        augue. Maecenas vitae mollis neque. Proin tristique magna eros, eget
        lobortis nisi dictum semper. Etiam et eros porttitor, vulputate neque
        et, elementum sem. Ut ligula ligula, lobortis vel tempus vitae, varius
        eu nulla. Vivamus scelerisque lectus sed pretium eleifend. Cras
        venenatis nibh eget ipsum posuere tristique. Nam non ligula
        sollicitudin, elementum purus consequat, feugiat leo. Duis maximus enim
        a diam aliquam congue. Sed euismod ut leo id viverra. Proin tortor
        lacus, laoreet facilisis iaculis at, porta in neque.
      </p>
      <p>
        freestar freestar Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Etiam quis odio suscipit, hendrerit ante quis, luctus urna.
        Vestibulum semper metus nec dolor gravida faucibus. Aliquam lectus
        turpis, tempus vel lectus et, blandit finibus nibh. Mauris porttitor dui
        at volutpat bibendum. Vestibulum ante ipsum primis in faucibus orci
        luctus et ultrices posuere cubilia curae; Vivamus maximus, neque in
        porta iaculis, nulla enim faucibus neque, ut lobortis ligula ligula eget
        augue. Maecenas vitae mollis neque. Proin tristique magna eros, eget
        lobortis nisi dictum semper. Etiam et eros porttitor, vulputate neque
        et, elementum sem. Ut ligula ligula, lobortis vel tempus vitae, varius
        eu nulla. Vivamus scelerisque lectus sed pretium eleifend. Cras
        venenatis nibh eget ipsum posuere tristique. Nam non ligula
        sollicitudin, elementum purus consequat, feugiat leo. Duis maximus enim
        a diam aliquam congue. Sed euismod ut leo id viverra. Proin tortor
        lacus, laoreet facilisis iaculis at, porta in neque.
      </p>
      <p>
        freestar freestar Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Etiam quis odio suscipit, hendrerit ante quis, luctus urna.
        Vestibulum semper metus nec dolor gravida faucibus. Aliquam lectus
        turpis, tempus vel lectus et, blandit finibus nibh. Mauris porttitor dui
        at volutpat bibendum. Vestibulum ante ipsum primis in faucibus orci
        luctus et ultrices posuere cubilia curae; Vivamus maximus, neque in
        porta iaculis, nulla enim faucibus neque, ut lobortis ligula ligula eget
        augue. Maecenas vitae mollis neque. Proin tristique magna eros, eget
        lobortis nisi dictum semper. Etiam et eros porttitor, vulputate neque
        et, elementum sem. Ut ligula ligula, lobortis vel tempus vitae, varius
        eu nulla. Vivamus scelerisque lectus sed pretium eleifend. Cras
        venenatis nibh eget ipsum posuere tristique. Nam non ligula
        sollicitudin, elementum purus consequat, feugiat leo. Duis maximus enim
        a diam aliquam congue. Sed euismod ut leo id viverra. Proin tortor
        lacus, laoreet facilisis iaculis at, porta in neque.
      </p>
      <p>
        freestar freestar Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Etiam quis odio suscipit, hendrerit ante quis, luctus urna.
        Vestibulum semper metus nec dolor gravida faucibus. Aliquam lectus
        turpis, tempus vel lectus et, blandit finibus nibh. Mauris porttitor dui
        at volutpat bibendum. Vestibulum ante ipsum primis in faucibus orci
        luctus et ultrices posuere cubilia curae; Vivamus maximus, neque in
        porta iaculis, nulla enim faucibus neque, ut lobortis ligula ligula eget
        augue. Maecenas vitae mollis neque. Proin tristique magna eros, eget
        lobortis nisi dictum semper. Etiam et eros porttitor, vulputate neque
        et, elementum sem. Ut ligula ligula, lobortis vel tempus vitae, varius
        eu nulla. Vivamus scelerisque lectus sed pretium eleifend. Cras
        venenatis nibh eget ipsum posuere tristique. Nam non ligula
        sollicitudin, elementum purus consequat, feugiat leo. Duis maximus enim
        a diam aliquam congue. Sed euismod ut leo id viverra. Proin tortor
        lacus, laoreet facilisis iaculis at, porta in neque.
      </p>
      <p>
        freestar freestar Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Etiam quis odio suscipit, hendrerit ante quis, luctus urna.
        Vestibulum semper metus nec dolor gravida faucibus. Aliquam lectus
        turpis, tempus vel lectus et, blandit finibus nibh. Mauris porttitor dui
        at volutpat bibendum. Vestibulum ante ipsum primis in faucibus orci
        luctus et ultrices posuere cubilia curae; Vivamus maximus, neque in
        porta iaculis, nulla enim faucibus neque, ut lobortis ligula ligula eget
        augue. Maecenas vitae mollis neque. Proin tristique magna eros, eget
        lobortis nisi dictum semper. Etiam et eros porttitor, vulputate neque
        et, elementum sem. Ut ligula ligula, lobortis vel tempus vitae, varius
        eu nulla. Vivamus scelerisque lectus sed pretium eleifend. Cras
        venenatis nibh eget ipsum posuere tristique. Nam non ligula
        sollicitudin, elementum purus consequat, feugiat leo. Duis maximus enim
        a diam aliquam congue. Sed euismod ut leo id viverra. Proin tortor
        lacus, laoreet facilisis iaculis at, porta in neque.
      </p>
    </div>
  );
}

export default ModalPage;
