/* globals document, FileReader */
import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom'; // eslint-disable-line
import ReactCrop, { makeAspectCrop } from 'react-image-crop';
/**
 * Load the image in the crop editor.
 */	

 class Parent extends PureComponent {
    state = {
      crop: {
        x: 0,
        y: 0,
       // aspect: 16 / 9,
      },
      maxHeight: 80,
    }


    onImageLoaded = (image) => {
      this.setState({
        crop: makeAspectCrop({
          x: 0,
          y: 0,
          aspect: 10 / 4,
          width: 50,
        }, image.naturalWidth / image.naturalHeight),
        image,
      });
    }
    onCropComplete = (crop, pixelCrop) => {
      console.log('onCropComplete, pixelCrop:', pixelCrop);
    }

    onCropChange = (crop) => {
      this.setState({ crop });
      const { image } = this.state;
      this.setState({
        crop: makeAspectCrop({
          x: 20,
          y: 5,
          aspect: 1,
          height: 50,
        }, image.naturalWidth / image.naturalHeight),
        disabled: false
      });
    }


    render() {
    	
      return (
        <div>
          <ReactCrop
            src={this.props.dataUrl}
            
          />
        </div>
      );
    }
  }


export default Parent;