import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProfilePhoto from './profilePhoto';
import ProfileInfo from './profileInfo';
import ProfileUpdate from './profileUpdate';


const Profile= (props) =>{
        const onChangeView = props.onChangeView;
        console.log(props.onChangeView)
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

                                    <ProfileInfo onChangeView = {onChangeView}/>

                                    
                                </div>

                            </div>

                        </div>
                    </div>
                     <ProfilePhoto onChangeView={onChangeView} />

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