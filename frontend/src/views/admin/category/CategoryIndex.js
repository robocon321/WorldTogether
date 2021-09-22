import { React } from "react";
import {Route, Switch} from "react-router-dom";
import CategoryEdit from "./CategoryEdit";
import CategoryNew from "./CategoryNew";
import CategoryList from "./CategoryList";

const CategoryIndex = props => {
  return (
    <Switch>
      <Route path="/admin/category/new" component={CategoryNew} />
      <Route path="/admin/category/edit" component={CategoryEdit} />
      <Route path="/admin/category" component={CategoryList} />
    </Switch>
  )
}

export default CategoryIndex;