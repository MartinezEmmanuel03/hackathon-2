import React, { useState, useEffect } from "react";
import instance from "@services/apiConnexion";
import { useParams } from "react-router-dom";

import ConnectForm from "@components/ConnectForm";
import ButtonTemplate from "@components/ButtonTemplate";

function Information() {
  // const { id } = useParams();
  const [myUsers, setMyUsers] = useState({
    id: null,
    nameU: "",
    firstnameU: "",
    location: "",
    email: "",
    password: "",
  });

  const handleInputOnChange = (place, value) => {
    const newUser = { ...myUsers };
    newUser[place] = value;
    setMyUsers(newUser);
  };

  const updateSetting = (data) => {
    setMyUsers({
      id: data.id,
      firstnameU: data.firstnameU,
      nameU: data.nameU,
      location: data.location,
      email: data.email,
      password: data.password,
    });
  };

  useEffect(() => {
    instance
      .get(`/users/1`)
      .then((user) => updateSetting(user.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <form className="flex flex-col items-center w-full pt-10 gap-y-7">
      {myUsers && (
        <>
          <ConnectForm
            dataUsers={myUsers}
            handleInputOnChange={handleInputOnChange}
          />
          <div className="flex justify-around space-x-8 pt-5">
            <ButtonTemplate
              buttonType="button"
              buttonText="UPDATE"
              buttonStyle="cstm_buttonSecondaryNone"
            />
          </div>
        </>
      )}
    </form>
  );
}

export default Information;
