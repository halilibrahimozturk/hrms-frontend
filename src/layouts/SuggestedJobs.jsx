import React from 'react'
import { Button } from 'semantic-ui-react'

export default function SuggestedJobs() {
  return (
    <div>
      <Button.Group>
        <Button labelPosition='left' icon='left chevron' content='Geri' />
        <Button icon content='Market Yöneticisi' />
        <Button icon content='Software Developer' />

        <Button icon content='Sr. Quality Auditor' />

        <Button icon content='Akbank Yönetici Adayı' />

        <Button icon content='Market Müdürü' />

        <Button icon content='Sigorta Yöneticisi' />


        <Button labelPosition='right' icon='right chevron' content='İleri' />
      </Button.Group>

    </div>
  )
}
