import React, { Component } from 'react';
import FoodItem from './FoodItem';
import {connect} from 'react-redux';

class FoodList extends Component {

   
  render() {
    // console.log(this.props.todos);
    // var {tasks}=this.props;
    // var {filtername,filterStatus}=this.state;
    // var elmTasks=tasks.map((task,index)=>{
    //       return <FoodItem 
    //             key={task.id} 
    //             index={index} 
    //             task={task}
    //             // onUpdateStatus={this.props.onUpdateStatus}
    //             onDelete={this.props.onDelete}
    //             onUpdate={this.props.onUpdate}
    //             />
    // });
    return (
       <div class="row mt-15">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                      <table class="table table-hover mt-15">
                          <thead>
                              <tr>
                                <th className="text-center">STT</th>
                                <th className="text-center">Tên</th>
                                <th className="text-center">Trạng Thái</th>
                                <th className="text-center">Hành Động</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                 <td></td>
                                 <td>
                                    <input 
                                    type="text"
                                    className="form-control"
                                    name="filtername" 
                                    // value={filtername}
                                    onChange={this.onChange} 
                                     />
                                  
                                 </td>
                                 <td>
                                    <select
                                        className="form-control"
                                        name="filterStatus"
                                        // value={filterStatus}
                                        onChange={this.onChange}

                                    >
                                        <option value={-1}>Tất cả</option>
                                        <option value={0}>Ẩn</option>
                                        <option value={1}>Kích Hoạt</option>
                                    </select>
                                 </td>
                              </tr>
                        {/* {elmTasks} */}
                          </tbody>
                        
                      </table>
                    </div>
                  </div>
     
    );
  }
}

export default (FoodList);