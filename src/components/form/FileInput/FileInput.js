import React from 'react';

import { uploadFile, UPLOAD_STATUS } from '../../../services/storage';

import './FileInput.scss';

class FileInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      image: '',
      progress: 0,
      uploading: false,
    };
  }

  handleUploadFile = (event)  => {
    const { collection, onImageUploaded } = this.props;
    const { files } = event.target;
    const file = files.length > 0 ? files[0] : null;

    if (file) {
      this.setState({ uploading: true });
      uploadFile(collection, file, (result) => {
        if (result.status === UPLOAD_STATUS.FINISHED) {
          this.setState({
            image: result.url,
            uploading: false,
          });
          onImageUploaded(result.url);
        } else if (result.status === UPLOAD_STATUS.PENDING) {
          this.setState({ progress: result.progress });
        }
      });
    }
  }

  render() {
    const { image, uploading, progress } = this.state;

    return (
      <div className="form-fileinput">
        <div>
          {image && <img src={image} alt="" />}
        </div>
        <label htmlFor="image">Imagen</label>
        <input id="image" type="file" onChange={this.handleUploadFile}/>
        {uploading && 
          <div className="progress-bar">
            <div className="progress-bar-content" style={{ width: `${progress}%` }} />
          </div>}
      </div>
    );
  }
}


 
export default FileInput;