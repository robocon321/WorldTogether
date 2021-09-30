import { React } from "react";
import {Route, Switch} from "react-router-dom";
import CategoryEdit from "./CategoryEdit";
import CategoryNew from "./CategoryNew";
import CategoryList from "./CategoryList";
import CategoryProvider from "../../../contexts/CategoryContext";
import { Provider } from "react-redux";
import store from "../../../reducers/CategoryReducer";

const CategoryIndex = props => {
  return (
    <Provider store={store}>
      <CategoryProvider>
        <Switch>
          <Route path="/admin/category/new" component={CategoryNew} />
          <Route path="/admin/category/edit" component={CategoryEdit} />
          <Route path="/admin/category" component={CategoryList} />
        </Switch>
      </CategoryProvider>
    </Provider>
  )
}

export default CategoryIndex;