import InputTemplate from "./ImputTemplate";

function ConnectForm({ dataUsers, handleInputOnChange }) {
  return (
    <div className="flex flex-col items-center w-full pt-10 gap-y-7">
      <div className="flex flex-row">
        <h1>Prénom :</h1>
        <InputTemplate
          customWidth="cstm_width_XlInput"
          inputType="text"
          textPlaceholder="firstname"
          value={dataUsers.firstnameU}
          methodOnChange={handleInputOnChange}
          name="Firstname"
        />
      </div>
      <div className="flex flex-row">
        <h1>Nom :</h1>
        <InputTemplate
          customWidth="cstm_width_XlInput"
          inputType="text"
          textPlaceholder="Name"
          value={dataUsers.nameU}
          methodOnChange={handleInputOnChange}
          name="Last name"
        />
      </div>
      <div className="flex flex-row">
        <h1>Ville :</h1>
        <InputTemplate
          customWidth="cstm_width_XlInput"
          inputType="text"
          textPlaceholder="location"
          value={dataUsers.location}
          methodOnChange={handleInputOnChange}
          name="Location"
        />
      </div>
      <div className="flex flex-row">
        <h1>Email :</h1>
        <InputTemplate
          customWidth="cstm_width_XlInput"
          inputType="text"
          textPlaceholder="email"
          value={dataUsers.email}
          methodOnChange={handleInputOnChange}
          name="Email"
        />
      </div>
      <div className="flex flex-row">
        <h1>Mot de passe :</h1>
        <InputTemplate
          customWidth="cstm_width_XlInput"
          inputType="text"
          textPlaceholder="Mot de passe"
          value={dataUsers.password}
          methodOnChange={handleInputOnChange}
          name="Password"
        />
      </div>
    </div>
  );
}

export default ConnectForm;
