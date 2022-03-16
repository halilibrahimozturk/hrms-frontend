import React, { useState , useEffect } from 'react'
import { Icon,  Menu, Table } from 'semantic-ui-react'
import JobService from '../services/jobService'
export default function JobList() {

    // const colors = [
    //     'red',
    //     'orange',
    //     'yellow',
    //     'olive',
    //     'green',
    //     'teal',
    //     'blue',
    //     'violet',
    //     'purple',
    //     'pink',
    //     'brown',
    //     'grey',
    //     'black',
    // ]

    const [jobs, setJobs] = useState([])

    useEffect(()=>{
            let jobService = new JobService()
            jobService.getJobs().then(result=>setJobs(result.data.data))

            
        
    },[])
    return (
        <div>








            {/* {colors.map((color) => ( */}
            <Table celled
            // padded color={color} key={color}
            >
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Company Image</Table.HeaderCell>

                        <Table.HeaderCell>Company Name</Table.HeaderCell>

                        <Table.HeaderCell>Job Title</Table.HeaderCell>
                        <Table.HeaderCell>City</Table.HeaderCell>
                        <Table.HeaderCell>Application Deadline</Table.HeaderCell>
                        <Table.HeaderCell>Released Date</Table.HeaderCell>

                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {

                        jobs.map(job => (
                            <Table.Row key ={job.id}>

                                <Table.Cell>Picture</Table.Cell>
                                <Table.Cell>{job.employer.companyName}</Table.Cell>
                                <Table.Cell>{job.name}</Table.Cell>
                                <Table.Cell>{job.city.name}</Table.Cell>
                                <Table.Cell>{job.applicationDeadline}</Table.Cell>
                                <Table.Cell>{job.releaseDate}</Table.Cell>
                            </Table.Row>
                        ))
                    }




                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
            {/* ))} */}

        </div>
    )
}
