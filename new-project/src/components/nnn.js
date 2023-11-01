import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import Modal from "@mui/material/Modal";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  console.log(props.data);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [name, setName] = React.useState("");
  const editName = (e) => {
    e.preventDefault();
    // fetch("http://localhost:3001/updateUser", {
    //   method: "POST",
    //   crossDomain: true,
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //     "Access-Control-Allow-Origin": "",
    //   },
    //   body: JSON.stringify({
    //     id: props.data._id,
    //     name: props.data.name,
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(name, data);
    //   });
  };
  return (
    <div>
      <Button onClick={handleOpen}>
        <EditIcon />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={editName}>
            <input
              placeholder="Edit Name."
              onChange={(e) => setName(e.target.value)}
              defaultValue={props.data.name}
            />
            <button type="submit">save</button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
