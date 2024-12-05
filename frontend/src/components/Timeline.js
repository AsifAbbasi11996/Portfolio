import React from 'react'
import '../assets/css/Timeline.css'

const Timeline = () => {
    return (
        <>
            <div className="timeline">
                <h3 className="text-timeline">TIMELINE</h3>

                <div className="box-2">
                    <p>Completed Bachelor's of Science Degree with Specialization in Computer Science from Thakur
                        Ramnarayan College of Arts and Commerce</p>
                    <p className="year">2020 - 2023 🎓</p>
                </div>
                <div className="box-3">
                    <p>Completed HSC from Shanti-Ratan Vidya Mandir High School and Junior College</p>
                    <p className="year">2019 - 2020 🎓</p>
                </div>
                <div className="box-4">
                    <p>Completed SSC from Shanti-Ratan Vidya Mandir High School and Junior College</p>
                    <p className="year">2017 - 2018 🎓</p>
                </div>
            </div>
        </>
    )
}

export default Timeline
