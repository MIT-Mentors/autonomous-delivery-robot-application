    import React from 'react';
    import '../css/Horizbar.css';

    function Horizbar() {

        var originString = window.location.origin;

        const logoutFunc = () => {
            //console.log(originString + '/draft-app/#/login')
            window.location.href = originString + "/login";


        }
        return (
            <>
                <div className='Title'>
                        Delivery Robot
                </div>

                {/* <a href='/login'>
                <div className='Login' >
                    Login
                </div>
                </a> */}    
                <br />
                
            </>
        )
    }

    export default Horizbar
