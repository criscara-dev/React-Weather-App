import React from 'react';

const MainHeader = (props) => {
    const headerStyle = {
         paddingTop: '1rem'
    }
    return (
            <div style={headerStyle}>
                <form>
                    <span className="fa fa-search fa-xs"></span>
                    <input placeholder='Search new place' />
                    <select name="locality" id="city">
                        <option value="all-places">All Places</option>
                        <option value="London">London</option>
                        <option value="Rome">Rome</option>
                        <option value="Praha">Praha</option>
                    </select>
                </form>
            </div>
        )
}

export default MainHeader;