import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Dropdown, Label } from 'semantic-ui-react'

export default function Profile() {

    const { applicationItems } = useSelector(state => state.application)
    return (
        <div>
            <Dropdown item text='Applicated Jobs'>
                <Dropdown.Menu>

                    {

                        applicationItems.map((applicationItem) => (
                            <Dropdown.Item as={NavLink} to="appliedJobs" key={applicationItem.job.id} >

                                {applicationItem.job.name}

                                <Label>

                                    {applicationItem.quantity
                                    }

                                </Label>
                            </Dropdown.Item>

                        ))
                    }

                    {/* <Dropdown.Item as={NavLink} to="appliedJobs">Applications</Dropdown.Item>
                    <Dropdown.Item as={NavLink} to="appliedJobs">Cover Letters</Dropdown.Item>
                    <Dropdown.Item as={NavLink} to="appliedJobs">Inbox</Dropdown.Item>
                    <Dropdown.Item as={NavLink} to="appliedJobs" >Settings</Dropdown.Item> */}

                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
