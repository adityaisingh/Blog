import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  TextInput,
} from "flowbite-react";
import profilePicture from "../assets/profileimage.avif";
import { useState } from "react";
import {
  updatestart,
  updateSuccess,
  updateFailure,
  deleteUserFailure,
  deleteUserSuccess,
  deleteUserStart,
  signoutSuccess,
} from "../redux/userSlice";
import { HiOutlineExclamationCircle } from "react-icons/hi";

const DashProfile = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();

  const handlechange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.perventDefault();
    if (Object.keys(formData).length === 0) {
      return;
    }
    try {
      dispatchEvent(updatestart());
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        dispatch(updateFailure(data.message));
      } else {
        dispatch(updateSuccess(data));
      }
    } catch (error) {
      dispatch(updateFailure(error.message));
    }
  };
  const handleDeleteUser = async () => {
    setshowModal(false);
    try {
      dispatch(deleteUserStart());
      const res = await fetch(`/api/user/delete${currentUser._id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (!res.ok) {
        dispatch(deleteUserFailure(data.message));
      } else {
        dispatch(deleteUserSuccess(data));
      }
    } catch (error) {
      dispatch(deleteUserFailure(error.message));
    }
  };
  const [showModal, setshowModal] = useState(false);

  const handleSignout = async () => {
    try {
      const res = await fetch("/api/user/signout", {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {}
  };

  return (
    <div className="max-w-lg mx-auto p-3 w-full">
      <h1 className="my-7 text-center font-semibold text-3xl">Profile</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="w-32 h-32 self-center cursor-pointer">
          <img
            src={currentUser.profilePicture}
            alt="user"
            className="rounded-full border-1 border-red-300 w-full h-full"
          />
        </div>

        <TextInput
          type="text"
          id="username"
          placeholder="username"
          defaultValue={currentUser.username}
          onChange={handlechange}
        />
        <TextInput
          type="email"
          id="email"
          placeholder="email"
          defaultValue={currentUser.email}
          onChange={handlechange}
        />
        <TextInput
          type="password"
          id="password"
          placeholder="password"
          onChange={handlechange}
        />
        <Button type="submit" gradientDuoTone="purpleToBlue">
          Update
        </Button>
        <div className="text-red-500 flex justify-between  ">
          <span onClick={() => setshowModal(true)} className="cursor-pointer">
            Delete Account
          </span>
          <span onClick={handleSignout} className="cursor-pointer">
            Sign Out
          </span>
        </div>
      </form>
      <Modal
        show={showModal}
        onClose={() => setshowModal(false)}
        popup
        size="md">
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="h-14 w-14 text-gray-200 dark:text-gray-200 mb-4 mx-auto" />
          </div>
          <h3>Are you sure you want to delete your Account?</h3>
          <div className="flex ">
            <Button color="failure">Yes,I'm sure</Button>
            <span> Don't delete</span>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default DashProfile;
