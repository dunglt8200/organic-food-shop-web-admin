const apiUrl = process.env.REACT_APP_API_URL;

const GetList = `${apiUrl}/product_type/getlist`;
const Create = `${apiUrl}/product_type/create`;
const Update = `${apiUrl}/product_type/update`;
const DeleteIds = `${apiUrl}/product_type/deleteIds`;

const ProductTypeApi = {
    GetList,
    Create,
    Update,
    DeleteIds
  };

export default ProductTypeApi;