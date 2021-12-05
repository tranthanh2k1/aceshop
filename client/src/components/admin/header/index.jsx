
import React from 'react';
import Logo from '../../../assets/images/logo.png'


const HeaderAdmin = () => {
    
    return (
        <div className='admin__header'>
            <div className="admin__header-sidebar">
                <img src={Logo} alt="logo" />
            </div>
            <div className="admin__header-top">
                <div className="admin__header-top-left">
                    <i class="bi bi-list"></i>
                    <form className='admin__header-form-search'>
                        <input type="text" placeholder='Search now' className='admin__header-input-search' />
                        <button className='admin__header-btn-search'>
                            <i class="bi bi-search"></i>
                        </button>
                    </form>
                </div>
                <div className="admin__header-top-right">
                    <i class="bi bi-bell"></i>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQb_LnZHO6pKxZ9u66AuGt_HzFkpdnrEnqFA&usqp=CAU" alt="avatar" className='admin__header-avatar' />
                    <i class="bi bi-three-dots"></i>
                </div>
            </div>
            
        </div>
    )
}

export default HeaderAdmin
