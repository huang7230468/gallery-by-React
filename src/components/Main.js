require('normalize.css/normalize.css');
require('styles/App.scss');
import React from 'react';
//获取图片相关json数据
var imagesDatas = require('../data/imageDatas.json');


//利用自执行函数，将图片名信息转成图片url路径信息
imagesDatas =( function getImageURL(imageDataArr){
       for(var i=0 ,j = imageDataArr.length;i<j;i++){
          var singleImageData = imageDataArr[i];
          singleImageData.imageURL = require('../images/'+
          	 singleImageData.fileName);
          imageDataArr[i] = singleImageData ;
       }
       return imageDataArr ;
})(imagesDatas);

  // imagesDatas = this.getImageURL(imageDatas)

class AppComponent extends React.Component { 
  render() {
    return (
         <section className="state">
            <section className="img-sec">
            </section>
            <nav className="controller-nav">
            </nav>
         </section>

    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
