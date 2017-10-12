import React from 'react';
import {connect} from 'react-redux';
import * as utils from '../../lib/utils';
import ProfileForm from '../profile-form';
import {profileFetchRequest, profileCreateRequest} from '../../action/profile-acions';

class SettingsContainer extends React.Component {
  componentWillMount() {
    this.props.profileFetch();
  }

  render() {
    return (
      <div className="settings-container">
        {utils.renderIf(this.props.auth && !this.props.profile,
          <div className="profile-form-container">
            <h2>Create a Profile?</h2>
            <ProfileForm
              buttonText="create"
              onComplete={this.props.auth && !this.props.profileCreate}/>
          </div>
        )}
      </div>
    );
  }
}

let mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth,
});

let mapDispatchToProps = dispatch => ({
  profileCreate: profile => dispatch(profileCreateRequest(profile)),
  profileFetch: () => dispatch(profileFetchRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer);