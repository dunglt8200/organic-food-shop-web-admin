const apiUrl = process.env.REACT_APP_API_URL;

const GetList = `${apiUrl}/product/getlist`;
const Create = `${apiUrl}/product/create`;
const Update = `{${apiUrl}}/product/update`;
const DeleteIds = `{${apiUrl}}/product/deleteIds`;

const ProductApi = {
    GetList,
    Create,
    Update,
    DeleteIds
  };

export default ProductApi;