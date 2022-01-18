import React from 'react';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import './widgets.css';

function Widgets() {

const newsArticle = (heading, subtitle) =>(
    <div className='widgets__article'>
        <div className='widgets__articleLeft'>
            <FiberManualRecordIcon/>
        </div>
        <div className='widgets__articleRight'>
            <h4>{heading}</h4>
            <p>{subtitle}</p>
        </div>
    </div>
)

    return (
        <div className='widgets'>
            <div className='widgets__header'>
                <h2>LinkedIn News</h2>
                <InfoIcon/>
            </div>
            {newsArticle("React-router has realeased a new version","top news - 12000 readers")}
            {newsArticle("React-router has realeased a new version","top news - 12000 readers")}
            {newsArticle("React-router has realeased a new version","top news - 12000 readers")}
            {newsArticle("React-router has realeased a new version","top news - 12000 readers")}
            {newsArticle("React-router has realeased a new version","top news - 12000 readers")}
            {newsArticle("React-router has realeased a new version","top news - 12000 readers")}
        </div>
    )
}

export default Widgets
