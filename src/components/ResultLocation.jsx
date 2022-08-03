import React from 'react'

export default function ResultLocation({location}) {

    return (
        <section className='section-location'>
            <div className='address'>
                <h2 className='address__title'>IP ADDRESS</h2>
                <p className='address__description'>{location.ip}</p>
            </div>

            <span className="divider"></span>

            <div className='location'>
                <h2 className='location__title'>LOCATION</h2>
                <p className='location__descripton'>{location.location.city}</p>
            </div>

            <span className="divider"></span>

            <div className='timezone'>
                <h2 className='timezone__title'>TIMEZONE</h2>
                <p className='timezone__description'>{location.location.timezone}</p>
            </div>

            <span className="divider"></span>

            <div className='isp'>
                <h2 className='isp__title'>ISP</h2>
                <p className='isp__description'>{location.isp}</p>
            </div>
        </section>
    )
}
