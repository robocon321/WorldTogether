import axios from "axios";
import { createContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SERVER } from "../../utils/Constants";
import * as categoryActions from "../../actions/client/template/ClientHeaderAction";

export const ClientHeaderContext = createContext();

const ClientHeaderProvider = (props) => {
  const {categories} = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    const result = await axios.get(`${SERVER}/category`, {
      params: {
        search: '',
        is_delete: false
      }
    });
    
    if(result.data.success) {
      dispatch(categoryActions.loadCategory(result.data.category));
    }

  }

  const value = { categories, loadCategories };

  return (
    <ClientHeaderContext.Provider value={value}>
      {props.children}
    </ClientHeaderContext.Provider>
  )
}

export default ClientHeaderProvider;