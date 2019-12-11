import React, { Component } from 'react'
import "./module.style.css"


class index extends Component {
    constructor() {
        super();

        this.state={
            directors: [
                {
                    id: 1,
                    name: 'Antonio Victoriano F.Gregorio III',
                    position: 'Chairman/President'
                },
                {
                    id: 2,
                    name: 'Michael T. Defensor',
                    position: 'Non-Executive Director'
                },
                {
                    id: 3,
                    name: 'Martin Antonio G. Zamora',
                    position: 'Non-Executive Director'
                },
                {
                    id: 4,
                    name: 'Job Adrian M. Ambrosio',
                    position: 'Non-Executive Director'
                },
                {
                    id: 5,
                    name: 'David O. Chua',
                    position: 'Non-Executive Director'
                },
                {
                    id: 6,
                    name: 'Leonardo B. Cua',
                    position: 'Independent Director'
                },
                {
                    id: 7,
                    name: 'Manuel G. Ong',
                    position: 'Independent Director'
                },
                

            ],
            executive: [
                {
                    id: 1,
                    name: 'Antonio Victoriano F. Gregorio III ',
                    position: 'Chairman/President'
                },
                {
                    id: 2,
                    name: 'Delfin S. Castro, Jr.',
                    position: 'Treasurer'
                },
                {
                    id: 3,
                    name: 'Arsenio C. Cabrera, Jr.',
                    position: 'Corporate Secretary'
                },
                {
                    id: 4,
                    name: 'Cesar Domini C. Garcia',
                    position: 'Assistant Corporate Secretary'
                },
            ]



        }
    }
    render() {
        
        return (
            <div className='container'>
                <div className='row justify-content-center mb-3 mt-5'>
                    <h2>Board of Directors and Executive Officers</h2>
                </div>
                <div className='row mt-5 mb-4'>
                    <h2>Directors</h2>
                </div>
                {
                    this.state.directors.map(directors =>

                        <div className='row'>
                            <div className='col-4'>
                                    <p key={directors.id}>{directors.name}</p>
                            </div>
                            <div className='col-4'>
                                <p>{directors.position}</p>
                            </div>
                        </div>
                    )
                }
                <div className='row flex'>
                    <p>Download Directors Profile (PDF) <a href='google.com'>here</a></p>

                </div>

                <div className='row mt-5 mb-4'>
                    <h2>Executive Officers</h2>
                </div>
                {
                    this.state.executive.map(executive =>

                        <div className='row'>
                            <div className='col-4'>
                                <p key={executive.id}>{executive.name}</p>
                            </div>
                            <div className='col-4'>
                                <p>{executive.position}</p>
                            </div>
                        </div>
                    )
                }
                
                <div className='row flex'>
                    <p>Download Executive Profile (PDF) <a href='google.com'>here</a></p>

                </div>
            </div>
        )
    }
}

export default index
