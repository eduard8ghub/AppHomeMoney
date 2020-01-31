import React, {Component} from 'react';
import FormAddCategories from "../../components/RecorsForms/FormAddCategories/FormAddCategories";
import FormAddEvents from "../../components/RecorsForms/FormAddEvents/FormAddEvents";

class Records extends Component {
    render() {
        return (
           <>
               <div className="title-block">
                   <h3 className="title">
                       Страница записей <span className="sparkline bar"> </span>
                   </h3>
               </div>

               <section className="section">
                   <div className="row">
                       <div className="col-md-6">
                           <FormAddEvents/>
                           {/*{categories && <AddEvent categories={categories} onAddNewEvent={onAddNewEvent}/>}*/}
                       </div>
                       <div className="col-md-6">
                           <FormAddCategories/>
                           {/*<AddCategories onAddCategories={onAddCategories}/>*/}
                       </div>
                   </div>
                   <div className="row">
                       <div className="col-md-6">
                           {/*<EditCategory/>*/}
                       </div>
                   </div>
               </section>
               </>
        );
    }
}

export default Records;