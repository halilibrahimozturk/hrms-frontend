import { useParams } from 'react-router-dom'
import { Button, Card, Image } from 'semantic-ui-react'
import React, { useState, useEffect } from 'react'

import JobService from '../services/jobService'

export default function JobDetail() {

    let { id } = useParams()


    const [job, setJob] = useState({})

    useEffect(() => {
        let jobService = new JobService()
        jobService.getJobsById(id).then(result => {
            setJob(result.data.data)
            console.log("job:", result.data.data);
        })



    }, [])





    return (

        <div>
            <Card.Group>
                <Card fluid>
                    <Card.Content>
                        <Image
                            floated='right'
                            size='mini'
                            src='/images/avatar/large/steve.jpg'
                        />
                        <Card.Header>{job.name}</Card.Header>
                        <Card.Meta>ABC</Card.Meta>
                        <Card.Description>
                            Steve wants to add you to the group <strong>best friends</strong>
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic color='green'>
                                Approve
                            </Button>
                            <Button basic color='red'>
                                Decline
                            </Button>
                        </div>
                    </Card.Content>
                </Card>


            </Card.Group>
        </div>
    )
}
