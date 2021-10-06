import { React } from "react";
import {Route, Switch} from "react-router-dom";
import {combineReducers, createStore} from "redux";
import CategoryEdit from "./CategoryEdit";
import CategoryNew from "./CategoryNew";
import CategoryList from "./CategoryList";
import CategoryProvider from "../../../contexts/CategoryContext";
import { Provider } from "react-redux";
import categoryReducer from "../../../reducers/CategoryReducer";
import attrReducer from "../../../reducers/AttributeReducer";

const reducer = combineReducers({
  category: categoryReducer,
  attr: attrReducer
})

const store = createStore(reducer);

const CategoryIndex = props => {
  return (
    <Provider store={store}>
      <CategoryProvider>
        <Switch>
          <Route path="/admin/category/new" component={CategoryNew} />
          <Route path="/admin/category/edit/:id" component={CategoryEdit} />
          <Route path="/admin/category" component={CategoryList} />
        </Switch>
      </CategoryProvider>
    </Provider>
  )
}

export default CategoryIndex;