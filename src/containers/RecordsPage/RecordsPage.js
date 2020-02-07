import React, {Component} from 'react';
import FormAddCategories from "../../components/RecorsForms/FormAddCategories/FormAddCategories";
import FormAddEvents from "../../components/RecorsForms/FormAddEvents/FormAddEvents";
import {connect} from "react-redux";
import {onAddNewCategory, onDeleteCategory, onUpdateCategory} from "../../store/actions/categoriesActions";
import {onAddNewEvent} from "../../store/actions/eventsActions";
import FormChangeCategory from "../../components/RecorsForms/FormChangeCategory/FormChangeCategory";
import "./RecordsPage.scss";

const mapStateToProps = (state) => {
  return {
      allCategories: state.categories.allCategories
  }
};

class RecordsPage extends Component {
    render() {
        let props = this.props;
        return (
           <>
               <div className="title-block">
                   <h3 className="title">
                       Inregistrari <span className="sparkline bar"> </span>
                   </h3>
               </div>

               <section className="section">
                   <div className="row">
                       <div className="col-md-6">
                           {props.allCategories && <FormAddEvents
                               allCategories={props.allCategories}
                               onAddNewEvent={props.onAddNewEvent}
                           />}
                           {/*{categories && <AddEvent categories={categories} onAddNewEvent={onAddNewEvent}/>}*/}
                       </div>
                       <div className="col-md-6">
                           <FormAddCategories onAddNewCategory={props.onAddNewCategory}/>
                           {/*<AddCategories onAddCategories={onAddCategories}/>*/}
                       </div>
                   </div>
                   <div className="row">
                       <div className="col-md-6">
                           {props.allCategories && <FormChangeCategory
                               allCategories={props.allCategories}
                               onUpdateCategory={props.onUpdateCategory}
                               onDeleteCategory={props.onDeleteCategory}
                           />}
                       </div>
                   </div>
               </section>
               </>
        );
    }
}

export default connect(mapStateToProps, {onAddNewCategory, onAddNewEvent, onUpdateCategory, onDeleteCategory})(RecordsPage);