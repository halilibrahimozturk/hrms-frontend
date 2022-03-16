import React from 'react'
import { NavLink } from 'react-router-dom'
import {Dropdown } from 'semantic-ui-react'

export default function Profile() {
    return (
        <div>
            <Dropdown item text='Profile'>
                <Dropdown.Menu>
                    <Dropdown.Item as= {NavLink} to ="appliedJobs">Applications</Dropdown.Item>
                    <Dropdown.Item as= {NavLink} to ="appliedJobs">Cover Letters</Dropdown.Item>
                    <Dropdown.Item as= {NavLink} to ="appliedJobs">Inbox</Dropdown.Item>
                    <Dropdown.Item as= {NavLink} to ="appliedJobs" >Settings</Dropdown.Item>
                  
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
