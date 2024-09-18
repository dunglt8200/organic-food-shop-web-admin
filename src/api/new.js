const apiUrl = process.env.REACT_APP_API_URL;

const GetList = `${apiUrl}/new/getlist`;
const Create = `${apiUrl}/new/create`;
const Update = `${apiUrl}/new/update`;
const DeleteIds = `${apiUrl}/new/deleteIds`;

const NewApi = {
    GetList,
    Create,
    Update,
    DeleteIds
  };

export default NewApi;