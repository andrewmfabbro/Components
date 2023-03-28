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
      <Button onClick={handleClose} primary>
        I Accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is where your paragraph will go.</p>
    </Modal>
  );
  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>

      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        ligula sem, convallis non molestie quis, varius a urna. Pellentesque ac
        mi odio. Nullam aliquet et nisl in porta. Praesent convallis justo vel
        porta malesuada. Cras fringilla sapien ut erat sollicitudin rhoncus.
        Nulla rhoncus ut enim eu bibendum. Aenean vitae feugiat lectus, eu
        dapibus leo. Phasellus ac velit sapien. Integer ullamcorper lacinia
        ultricies. Nulla congue ac ipsum et pretium. Ut sed eleifend quam, sit
        amet congue felis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        ligula sem, convallis non molestie quis, varius a urna. Pellentesque ac
        mi odio. Nullam aliquet et nisl in porta. Praesent convallis justo vel
        porta malesuada. Cras fringilla sapien ut erat sollicitudin rhoncus.
        Nulla rhoncus ut enim eu bibendum. Aenean vitae feugiat lectus, eu
        dapibus leo. Phasellus ac velit sapien. Integer ullamcorper lacinia
        ultricies. Nulla congue ac ipsum et pretium. Ut sed eleifend quam, sit
        amet congue felis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        ligula sem, convallis non molestie quis, varius a urna. Pellentesque ac
        mi odio. Nullam aliquet et nisl in porta. Praesent convallis justo vel
        porta malesuada. Cras fringilla sapien ut erat sollicitudin rhoncus.
        Nulla rhoncus ut enim eu bibendum. Aenean vitae feugiat lectus, eu
        dapibus leo. Phasellus ac velit sapien. Integer ullamcorper lacinia
        ultricies. Nulla congue ac ipsum et pretium. Ut sed eleifend quam, sit
        amet congue felis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        ligula sem, convallis non molestie quis, varius a urna. Pellentesque ac
        mi odio. Nullam aliquet et nisl in porta. Praesent convallis justo vel
        porta malesuada. Cras fringilla sapien ut erat sollicitudin rhoncus.
        Nulla rhoncus ut enim eu bibendum. Aenean vitae feugiat lectus, eu
        dapibus leo. Phasellus ac velit sapien. Integer ullamcorper lacinia
        ultricies. Nulla congue ac ipsum et pretium. Ut sed eleifend quam, sit
        amet congue felis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        ligula sem, convallis non molestie quis, varius a urna. Pellentesque ac
        mi odio. Nullam aliquet et nisl in porta. Praesent convallis justo vel
        porta malesuada. Cras fringilla sapien ut erat sollicitudin rhoncus.
        Nulla rhoncus ut enim eu bibendum. Aenean vitae feugiat lectus, eu
        dapibus leo. Phasellus ac velit sapien. Integer ullamcorper lacinia
        ultricies. Nulla congue ac ipsum et pretium. Ut sed eleifend quam, sit
        amet congue felis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        ligula sem, convallis non molestie quis, varius a urna. Pellentesque ac
        mi odio. Nullam aliquet et nisl in porta. Praesent convallis justo vel
        porta malesuada. Cras fringilla sapien ut erat sollicitudin rhoncus.
        Nulla rhoncus ut enim eu bibendum. Aenean vitae feugiat lectus, eu
        dapibus leo. Phasellus ac velit sapien. Integer ullamcorper lacinia
        ultricies. Nulla congue ac ipsum et pretium. Ut sed eleifend quam, sit
        amet congue felis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        ligula sem, convallis non molestie quis, varius a urna. Pellentesque ac
        mi odio. Nullam aliquet et nisl in porta. Praesent convallis justo vel
        porta malesuada. Cras fringilla sapien ut erat sollicitudin rhoncus.
        Nulla rhoncus ut enim eu bibendum. Aenean vitae feugiat lectus, eu
        dapibus leo. Phasellus ac velit sapien. Integer ullamcorper lacinia
        ultricies. Nulla congue ac ipsum et pretium. Ut sed eleifend quam, sit
        amet congue felis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        ligula sem, convallis non molestie quis, varius a urna. Pellentesque ac
        mi odio. Nullam aliquet et nisl in porta. Praesent convallis justo vel
        porta malesuada. Cras fringilla sapien ut erat sollicitudin rhoncus.
        Nulla rhoncus ut enim eu bibendum. Aenean vitae feugiat lectus, eu
        dapibus leo. Phasellus ac velit sapien. Integer ullamcorper lacinia
        ultricies. Nulla congue ac ipsum et pretium. Ut sed eleifend quam, sit
        amet congue felis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        ligula sem, convallis non molestie quis, varius a urna. Pellentesque ac
        mi odio. Nullam aliquet et nisl in porta. Praesent convallis justo vel
        porta malesuada. Cras fringilla sapien ut erat sollicitudin rhoncus.
        Nulla rhoncus ut enim eu bibendum. Aenean vitae feugiat lectus, eu
        dapibus leo. Phasellus ac velit sapien. Integer ullamcorper lacinia
        ultricies. Nulla congue ac ipsum et pretium. Ut sed eleifend quam, sit
        amet congue felis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        ligula sem, convallis non molestie quis, varius a urna. Pellentesque ac
        mi odio. Nullam aliquet et nisl in porta. Praesent convallis justo vel
        porta malesuada. Cras fringilla sapien ut erat sollicitudin rhoncus.
        Nulla rhoncus ut enim eu bibendum. Aenean vitae feugiat lectus, eu
        dapibus leo. Phasellus ac velit sapien. Integer ullamcorper lacinia
        ultricies. Nulla congue ac ipsum et pretium. Ut sed eleifend quam, sit
        amet congue felis.
      </p>
    </div>
  );
}

export default ModalPage;
