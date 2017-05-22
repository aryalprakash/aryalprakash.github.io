/**
 * Created by bikram on 1/30/17.
 */

import React from 'react';
import classnames from 'classnames';
import isEmpty from 'lodash/isEmpty';

const styles = {
  image: {
    marginTop: 10,
    marginBottom: 0,
    fontSize: 16,
  }
};

class ImageField extends React.Component {
  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    const file = event.target.files[0];
    this.props.updateField(name, value, file, "image");
  };

  selectImage = () => {
    document.getElementById('upload-img').click();
  };

  render() {
    const {field, value, label, error, previewImage, required} = this.props;
    return (
      <div className={classnames("form-group", { 'has-error': !isEmpty(error) })}>

        <div className="update-profile-pic" onClick={this.selectImage}>
          <img className="camera-icon" src={require("../../../../img/camera-icon.png")}/>
          <div className="thumbnail imgPreview">
            <img alt="..." className="img-responsive profile-pic" src={previewImage} />
          </div>
          <input
            name={field}
            type="file"
            accept="image/*"
            id="upload-img"
            style={{display: "none"}}
            onChange={this.handleInputChange}/>
        </div>
        {/*<div className="col-md-12">*/}
          {/*/!*<label className={classnames("control-label")}>{label}{required ? '*' : ''}</label>*!/*/}

          {/*<div className="col-md-12" style={{paddingLeft: 0}}>*/}
            {/*<div className="thumbnail imgPreview" >*/}
              {/*<img alt="..." className="img-responsive" src={previewImage} />*/}
            {/*</div>*/}
          {/*</div>*/}

          {/*<div className="col-md-8">*/}
            {/*<div className="form-group upload">*/}

              {/*<label className="file-name btn btn-default">*/}
                {/*<input*/}
                  {/*name={field}*/}
                  {/*value={value}*/}
                  {/*type="file"*/}
                  {/*accept="image/*"*/}
                  {/*onChange={this.handleInputChange}*/}
                {/*/>*/}
                {/*{!isEmpty(error) && error.map((err, index) => <span key={index} className="help-block">{err}</span>)}*/}
                {/*<span className="fa fa-upload"></span><span style={{fontSize: 12}}> Upload</span>*/}
              {/*</label>*/}
            {/*</div>*/}
          {/*</div>*/}
        {/*</div>*/}
      </div>
    );
  }
}

ImageField.propTypes = {
  field: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  error: React.PropTypes.array,
  updateField: React.PropTypes.func.isRequired,
  required: React.PropTypes.number
};

ImageField.defaultProps = {
  error: [],
  required: 0
};

export default ImageField;