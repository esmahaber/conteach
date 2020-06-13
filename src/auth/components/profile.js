import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProfilePhoto from './profilePhoto';
import ProfileInfo from './profileInfo';
import ProfileUpdate from './profileUpdate';


const Profile= (props) =>{
        const onView = props.onView;
        const onChangeView = props.onChangeView;
        return (
            <div id="container-fluid" >

                <div className="form-group row">

                    <div className="card mb-4" id="profilCard" >
                        <div className="card-header">
                            Kullanıcı Bilgileri
                            
  </div>
                        <div className="p-5"> 
                            <div className="form-group row">
                                <div >

                                    {onView === 2 ? <ProfileInfo onChangeView = {onChangeView}/> : 
                                     onView === 3 ? <ProfileUpdate/> : null
                                    }                                

                                    
                                </div>

                            </div>

                        </div>
                    </div>
                     <ProfilePhoto onView={props.onView} />

                </div>
            </div>

        );
    };

Profile.propTypes = {
    user: PropTypes.any
}

const mapStateToProps = state => ({
    user: state.LoginUser
});


export default connect(mapStateToProps, null)(Profile);