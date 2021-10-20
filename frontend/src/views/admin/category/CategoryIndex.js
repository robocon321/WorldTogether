import { React } from "react";
import {Route, Switch} from "react-router-dom";
import {createStore} from "redux";
import { Provider } from "react-redux";

import CategoryEdit from "./CategoryEdit";
import CategoryNew from "./CategoryNew";
import CategoryList from "./CategoryList";

import CategoryListProvider from "../../../contexts/admin/category/CategoryListContext";
import CategoryEditProvider from "../../../contexts/admin/category/CategoryEditContext";
import CategoryNewProvider from "../../../contexts/admin/category/CategoryNewContext";

import listCategoryReducer from "../../../reducers/admin/category/CategoryListReducer";
import editCategoryReducer from "../../../reducers/admin/category/CategoryEditReducer";
import newCategoryReducer from "../../../reducers/admin/category/CategoryNewReducer";


const listCategoryStore = createStore(listCategoryReducer);
const newCategoryStore = createStore(newCategoryReducer);
const editCategoryStore = createStore(editCategoryReducer);

const CategoryIndex = props => {
  return (
      <Switch>
        <Route path="/admin/category/new" children={(props) => (
          <Provider store={newCategoryStore}>
            <CategoryNewProvider {...props}>
              <CategoryNew />
            </CategoryNewProvider>
          </Provider>
        )} />
        <Route path="/admin/category/edit/:id" children={(props) => (
          <Provider store={editCategoryStore}>
            <CategoryEditProvider {...props}>
              <CategoryEdit />
            </CategoryEditProvider>
          </Provider>
        )} />
        <Route path="/admin/category" children={(props)=> (
          <Provider store={listCategoryStore}>
            <CategoryListProvider {...props}>
              <CategoryList />
            </CategoryListProvider>
          </Provider>
        )}/>
      </Switch>
  )
}

export default CategoryIndex;