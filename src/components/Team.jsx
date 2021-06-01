
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
export const Team = (props) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div id='team'>
      <div className='container'>
        <div class>
          <h3 style={{color:'#22B78E'}}>Testimonials</h3>
          <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
          </p>
        </div>
          
        <div id='row' class="main">
          <Carousel autoPlay="true" infinite={true} removeArrowOnDeviceType={["tablet", "mobile"]} responsive={responsive}>
            <div className="mains">
              <div className="row">
                <div className="col-md-2 imgesss">
                  <img className="ing" src="../img/Bitmap.png" alt="Bitman"/>
                </div>
                <div className="col-md-6 right">
                  <div>John Doe</div>
                  <div>Softwere Engineer</div>
                </div>
                <div className="col-md-3">
                <img src="../img/dash.png" alt="Bitman" style={{width: "80%"}}/>
                </div>
              </div>
              <div className="row datasss">
                <span className="hub">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                </span>
              </div>
            </div>
            <div className="mains">
              <div className="row">
                <div className="col-md-2 imgesss">
                  <img className="ing" src="../img/Bitmap.png" alt="Bitman"/>
                </div>
                <div className="col-md-6 right">
                  <div>John Doe</div>
                  <div>Softwere Engineer</div>
                </div>
                <div className="col-md-3">
                <img src="../img/dash.png" alt="Bitman" style={{width: "80%"}}/>
                </div>
              </div>
              <div className="row datasss">
                <span className="hub">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                </span>
              </div>
            </div>
            <div className="mains">
              <div className="row">
                <div className="col-md-2 imgesss">
                  <img className="ing" src="../img/Bitmap.png" alt="Bitman"/>
                </div>
                <div className="col-md-6 right">
                  <div>John Doe</div>
                  <div>Softwere Engineer</div>
                </div>
                <div className="col-md-3">
                <img src="../img/dash.png" alt="Bitman" style={{width:"80%"}}/>
                </div>
              </div>
              <div className="row datasss">
                <span className="hub">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                </span>
              </div>
            </div>
            <div className="mains">
              <div className="row">
                <div className="col-md-2 imgesss">
                  <img className="ing" src="../img/Bitmap.png" alt="Bitman"/>
                </div>
                <div className="col-md-6 right">
                  <div>John Doe</div>
                  <div>Softwere Engineer</div>
                </div>
                <div className="col-md-3">
                <img src="../img/dash.png" alt="Bitman" style={{width:"80%"}}/>
                </div>
              </div>
              <div className="row datasss">
                <span className="hub">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                </span>
              </div>
            </div>
            
          </Carousel>
          
        </div>
      </div>
    </div>
  )
}
