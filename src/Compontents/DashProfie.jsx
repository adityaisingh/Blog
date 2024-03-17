import { useSelector } from "react-redux";
import { Button, TextInput } from "flowbite-react";
import profilePicture from "../assets/profileimage.avif";

const DashProfie = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="max-w-lg mx-auto p-3 w-full">
      <h1 className="my-7 text-center font-semibold text-3xl">profile</h1>
      <form className="flex flex-col gap-4">
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
        />
        <TextInput
          type="email"
          id="email"
          placeholder="email"
          defaultValue={currentUser.email}
        />
        <TextInput type="password" id="password" placeholder="password" />
        <Button type="submit" gradientDuoTone="purpleToBlue">
          Update
        </Button>
        <div className="text-red-500 flex justify-between  ">
          <span>Delete Account</span>
          <span>Sign Out</span>
        </div>
      </form>
    </div>
  );
};

export default DashProfie;
