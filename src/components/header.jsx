import LoginForm from './form'
export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6 intro-text'>
                  {/* {props.data ? props.data.title : 'Loading'} */}
                  <div className="header-img">
                    <img src="../img/logo.png" alt="img"/>  
                  </div>
                  <div className="header-bone">
                    <p>ADULT & PAEDIATRIC BONE MARROW TRANSPLANT PROGRAMME</p>
                    <div className="header-sub">
                      <p>Haematology | Oncology | Immunology</p>
                    </div>
                    
                  </div>
                  <div>
                  <button type="button" class="appoint">Book An Appoinment</button>
                  </div>
              </div>
              <div className="col-md-6">
                <LoginForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
